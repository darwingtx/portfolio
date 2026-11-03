# 1) Build: genera el sitio estático en /app/dist
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Runtime: nginx sirve solo los archivos estáticos (imagen final pequeña, sin Node)
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
