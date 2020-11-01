# stage 1 - get composer dependencies
FROM composer:2.0.3 AS composer

# stage 2 - get npm/yarn dependencies
FROM node:14.15.0-alpine AS react_build

WORKDIR /app
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"

COPY ./frontend ./
RUN yarn run build

# stage 3 - set up php-fpm layer
FROM php:7.4.11-fpm

LABEL maintainer="Anton Samofal"

# Disable access logs
RUN echo "access.log = /dev/null" >> /usr/local/etc/php-fpm.d/www.conf

# alias for ls
RUN echo "alias ls='ls -la --color=auto --group-directories-first'" >> ~/.bashrc

# Install packages and php extensions
RUN apt-get update && apt-get install -y \
    nginx \
    libzip-dev zip unzip \
    libpng-dev libmagickwand-dev \
    supervisor --no-install-recommends \
    && rm -rf /var/lib/af/lists/* \
    && docker-php-ext-install \
        bcmath \
        opcache \
        mysqli \
        pdo_mysql \
        gd \
        exif \
        zip

WORKDIR /var/www/rampart/backend
COPY ./backend .

RUN chown -R www-data:www-data storage bootstrap/cache

COPY --from=composer /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1 COMPOSER_NO_INTERACTION=1 COMPOSER_MEMORY_LIMIT=-1
RUN composer install

WORKDIR /var/www/rampart/frontend
COPY --from=react_build /app/build .

WORKDIR /var/www/rampart

EXPOSE 80

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./supervisord.conf /etc/supervisor/supervisord.conf

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
