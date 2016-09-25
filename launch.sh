#!/bin/bash
docker run --name mongo -d mongo
#docker run -it --link mongo:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test"'
docker run -it -v $(pwd)/express:/tmp --rm -p 4000:4000 --link mongo:mongo --name express node /tmp/kickstart.sh

