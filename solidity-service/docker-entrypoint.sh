#!/bin/bash
set -e

echo "APP_PORT=$APP_PORT
REDIS_HOST=$REDIS_HOST
REDIS_PORT=$REDIS_PORT
REDIS_PASSWORD=$REDIS_PASSWORD
KAFKA_BROKERS=$KAFKA_BROKERS"

exec "$@"
