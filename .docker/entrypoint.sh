#!/bin/sh

if [ "$NODE_ENV" == "development" ]; then
    yarn install
fi

# Run CMD from docker
exec "$@"
