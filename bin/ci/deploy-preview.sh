#!/usr/bin/env bash

function has_code_changes() {
  git diff --quiet HEAD origin/main -- src examples

  if [ $? -eq 0 ]; then
    return 0
  else
    return 1
  fi
}

function trigger_build() {
  curl -X POST -d '{}' https://api.netlify.com/build_hooks/61bca39f3b89823193476ecd?trigger_branch=$1
}

has_code_changes && trigger_build

