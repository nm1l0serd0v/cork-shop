#!/usr/bin/env bash
set -e

# Check if package.json.tmp exists
if [ ! -f ./package.json.tmp ]; then
  touch ./package.json.tmp && echo "Successfully created /tmp/package.json.tmp"
fi

# Put contents of package.json and package.json.tmp in variables
PACKAGE=$(cat ./package.json)
PACKAGE_TMP=$(cat ./package.json.tmp)

# If files are different, run yarn install and update package.json.tmp
if [ "$PACKAGE" != "$PACKAGE_TMP" ]; then
  yarn install && cp ./package.json ./package.json.tmp &&
  echo "Successfully copied package.json to /package.json.tmp"
else
  echo "package.json and /package.json.tmp are identical"
fi

exec "$@"
