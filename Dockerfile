FROM node:12-alpine
ENV APP_HOST="host.docker.internal"
ENV APP_PORT=8081
ADD dist app/
COPY package.json app/
RUN cd app && npm i
CMD cd app && npm run server