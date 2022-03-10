# Stage 1 building the code
FROM node:lts-slim as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 final stage with builded code
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/dist/PokeFight ./

EXPOSE 80
