FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app /app
COPY nginx.conf /etc/nginx/nginx.conf