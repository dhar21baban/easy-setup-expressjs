#!/bin/bash

# Get the absolute path to the directory where this script lives (_scripts/)
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

# Get the project root (one level up from _scripts/)
PROJECT_ROOT=$(dirname "$SCRIPT_DIR")

# Use $PROJECT_ROOT for all operations
mkdir -p "$PROJECT_ROOT/src"/{config,database,models,services,controllers,routes,middlewares,utils,types}

cp "$PROJECT_ROOT/_scripts/resources/tsconfig.json" "$PROJECT_ROOT/tsconfig.json"
cp "$PROJECT_ROOT/_scripts/resources/package.json" "$PROJECT_ROOT/package.json"

npm install express
npm install -D typescript tsx @types/node @types/express
npm install cors dotenv helmet morgan