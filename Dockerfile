# 1) Build: genera el sitio estático en /app/dist
FROM node:22-alpine AS build
WORKDIR /app
# Dominio canónico (canonical, hreflang, og:url). Sin valor usa el default de astro.config.mjs.
ARG SITE_URL
ENV SITE_URL=$SITE_URL
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Runtime: nginx sirve solo los archivos estáticos (imagen final pequeña, sin Node)
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
