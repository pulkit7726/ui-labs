FROM node:14.20.0-alpine3.15
MAINTAINER Wavelabs
RUN mkdir /app
WORKDIR /app
ADD ./package.json /app/package.json
ADD . /app
RUN npm install -g serve && npm install
CMD ["npm", "storybook"]
