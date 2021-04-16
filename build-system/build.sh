#!/bin/sh
mkdir -p build && node build-system/merge-openrpc.js && openrpc-cli bundle GENERATED-openrpc.json > build/mevrpc-openrpc.json && rm GENERATED-openrpc.json && tsc && rm -rf build/
