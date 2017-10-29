FROM node:alpine

MAINTAINER onodai145, https://github.com/onodai145/rembot-api

ADD . /rembot-api
WORKDIR /rembot-api

VOLUME /rembot-api/config

RUN yarn install

CMD yarn run start
