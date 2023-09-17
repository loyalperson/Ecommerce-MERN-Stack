# syntax=docker/dockerfile:1.4
FROM node:16.15-alpine as build1

WORKDIR /apps/ecommerce

COPY /client .

RUN npm i

RUN npm run build

FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production

COPY --from=build1 /apps/ecommerce/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
