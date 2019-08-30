FROM node:10.4-alpine

WORKDIR /srv

ENV ENV=/root/.bashrc \
    NODE_ENV=production \
    TERM=xterm-color

RUN apk add --update --no-cache -q \
        ca-certificates \
        curl \
        gnupg \

COPY .docker/.bashrc /root/
COPY package.json yarn.lock ./

COPY . ./

RUN yarn yarn install --non-interactive --production=true

EXPOSE 3000

CMD ["yarn", "serve"]
