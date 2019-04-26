FROM node:12
RUN mkdir /project
WORKDIR /project

ENV PATH=/project/node_modules/.bin:$PATH
ENV npm_config_tmp=/temp

COPY package.json yarn.lock ./
