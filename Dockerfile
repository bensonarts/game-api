FROM node:10.4-alpine

WORKDIR /srv

ENV ENV=/root/.bashrc \
    NODE_ENV=production \
    TERM=xterm-color

RUN apk add --update --no-cache -q \
        ca-certificates \
        curl \
        gnupg \

    # clean up
    && rm -rf /tmp/* /var/cache/apk/* /var/www/*

COPY .docker/.bashrc /root/
COPY .docker/entrypoint.sh /
COPY package.json yarn.lock ./

RUN yarn install --non-interactive --production=false

COPY . ./

RUN yarn install --non-interactive --production=true \
    && yarn start

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]

CMD ["yarn", "start"]
