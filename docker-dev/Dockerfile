FROM composer:2.0.3 AS composer
FROM php:7.4.11-fpm

LABEL gets.maintainer="Anton Samofal"

# Install xdebug
ARG INSTALL_XDEBUG
RUN pecl -q install xdebug && docker-php-ext-enable xdebug \
    && echo "xdebug.remote_enable = 1"        >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_connect_back = 1"  >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    # && echo "xdebug.remote_host = host.docker.internal" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_port = 9000"       >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.max_nesting_level = 512"  >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini;

# Disable access logs
RUN echo "access.log = /dev/null" >> /usr/local/etc/php-fpm.d/www.conf

RUN echo "alias ls='ls -la --color=auto --group-directories-first'" >> /var/www/.bashrc

# Install packages and php extensions
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip \
    libpng-dev libmagickwand-dev mariadb-client --no-install-recommends \
    && rm -rf /var/lib/af/lists/* \
    && docker-php-ext-install \
        bcmath \
        opcache \
        gd \
        exif \
        zip

# Add Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1 COMPOSER_NO_INTERACTION=1 COMPOSER_MEMORY_LIMIT=-1

# add useful scripts
COPY docker-helpers/ /usr/local/bin/
RUN chmod -R +x /usr/local/bin/

# Use the default production configuration
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
RUN echo "upload_max_filesize = 32M" >> "$PHP_INI_DIR/php.ini"

# 1. Update uid of www-data user to avoid problems with file permissions on the host machine
# 2. Create DIR for composer and set proper owner
# 3. Comment out 'user' and 'group' directives of php-fpm, because we run php-fpm from non root user
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data && \
    mkdir -p /var/www/.composer && chown www-data:www-data /var/www/.composer && \
    mkdir -p /var/www/.config/psych && chown -R www-data:www-data /var/www/.config && \
    sed -e '/^user\|^group/s/^/;/g' -i /usr/local/etc/php-fpm.d/www.conf

# export PATH for vendor/bin
ENV PATH ./vendor/bin:$PATH

# allow to use colors in the terminal
ENV TERM=xterm-256color

USER www-data

WORKDIR /var/www/rampart

ENTRYPOINT ["/usr/local/bin/entrypoint-wrapper", "php-fpm"]
