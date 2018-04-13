#!/bin/sh

WEBPACK="./node_modules/webpack-cli/bin/webpack.js"
DLL_PATH="./dist/dll"

# Build vendor dlls if they're missing
if [ ! -d "$DLL_PATH" ]; then
  $WEBPACK --config webpack.vendor.config.js
fi

$WEBPACK

