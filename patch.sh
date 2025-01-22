#!/bin/bash

set -eu

cd node_modules/rpi-led-matrix
curl -H "Accept: application/vnd.github.v3.diff" https://api.github.com/repos/alexeden/rpi-led-matrix/commits/dd0416f6518343a3a5cbb5f410c01762428c0631 | patch -p1 -N
node-gyp build
cd -
