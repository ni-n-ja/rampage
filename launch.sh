#!/bin/bash
docker run -it -v $(pwd)/express:/tmp --name express node \
/tmp/kickstart.sh
#/bin/bash
