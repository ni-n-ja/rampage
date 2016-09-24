#!/bin/bash
cd $(dirname $0)
npm install -g gulp
npm install
chmod 777 -R node*
chmod 777 -R npm*
gulp
