 FROM node:12-alpine
 EXPOSE 6009
 ENV APP_HOST="host.docker.internal"
 ADD dist app/
 COPY package.json app/
 RUN cd app && npm i
 CMD cd app && npm run server