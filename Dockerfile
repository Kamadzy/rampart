FROM node:14.11.0-alpine AS build

LABEL maintainer="Anton Samofal"

WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN yarn run build

FROM nginx:1.18.0-alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
