FROM node:12-alpine
ENV APP_HOST="192.168.0.101"
ENV APP_PORT=8081
ENV DB_HOST="192.168.0.101"
ENV DB_PORT=5432
ADD dist app/
COPY package.json app/
RUN cd app && npm i
CMD cd app && npm run server