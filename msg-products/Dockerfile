FROM node:18.6.0-alpine3.15

RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:node package*.json .

RUN npm install
COPY --chown=app:node . .

EXPOSE 8090

CMD [ "node", "server.js" ]