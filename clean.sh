#!/bin/bash
#docker rm $(docker ps -f status=exited -q)
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
