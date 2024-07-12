#!/bin/bash

set -ex

#TODO: Error checking

SIZE=$1 # 128M, 1G, etc
FILENAME=$2

SIZE_BYTES=`echo $SIZE | numfmt --from=iec`
openssl rand -base64 -out $FILENAME "$SIZE_BYTES"
