FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
RUN apk add chromium
WORKDIR /app
ENV CHROME_BIN=/usr/bin/chromium-browser
COPY package.json /app
RUN npm install
RUN npm run test
COPY . /app
RUN npm run build --prod
RUN ls -R /app/dist

# despliegue
FROM nginx:1.20.1
COPY --from=build-step /app/dist /usr/share/nginx/html
EXPOSE 4200:80