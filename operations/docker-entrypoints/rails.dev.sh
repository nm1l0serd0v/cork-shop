#!/usr/bin/env bash

if [ -f /store/tmp/pids/server.pid ]; then
  rm /store/tmp/pids/server.pid
fi

# Create db if no exists
bundle exec rake db:exists
if [ $? -eq 0 ]; then
  bundle exec rake db:migrate
else
  bundle exec rake db:create db:migrate db:seed
fi


if [ $? -eq 0 ]; then
  bundle exec rake db:migrate
else
  bundle exec rake db:create db:migrate db:seed
fi

# Check if Gemfile.tmp exists
if [ ! -f ./tmp/Gemfile.tmp ]; then
  touch ./tmp/Gemfile.tmp &&
  echo "Successfully created /tmp/Gemfile.tmp"
fi

# Put contents of Gemfile and Gemfile.tmp in variables
GEMFILE=$(cat ./Gemfile)
GEMFILE_TMP=$(cat ./tmp/Gemfile.tmp)

# If files are different, run bundle install and update Gemfile.tmp
if [ "$GEMFILE" != "$GEMFILE_TMP" ]; then
  bundle install &&
  cp ./Gemfile ./tmp/Gemfile.tmp &&
  echo "Successfully copied Gemfile to /tmp/Gemfile.tmp"
else
  echo "Gemfile and /tmp/Gemfile.tmp are identical"
fi

# Check if stats.json.tmp exists
if [ ! -f ./tmp/stats.json.tmp ]; then
  touch ./tmp/stats.json.tmp &&
  echo "Successfully created /tmp/stats.json.tmp"
fi

# Put contents of stats.json and stats.json.tmp in variables
# BUNDLE_STATS=$(cat /store/public/packs/stats.json)
# BUNDLE_STATS_TMP=$(cat ./tmp/stats.json.tmp)

# If files are different, run bundle install and update Gemfile.tmp
# if [ "$BUNDLE_STATS" != "$BUNDLE_STATS_TMP" ]; then
#   yarn run bundle-stats &&
#   cp /conectar/public/packs/stats.json ./tmp/Gemfile.tmp &&
#   echo "Successfully copied stats.json to /tmp/stats.json.tmp"
# else
#   echo "stats.json and /tmp/stats.json.tmp are identical"
# fi

# if [ -f /conectar/public/packs/stats.json ]; then
#   rm /conectar/public/packs/stats.json
#   yarn run bundle-stats
# fi

exec "$@"
