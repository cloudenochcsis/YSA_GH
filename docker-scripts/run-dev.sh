#!/bin/bash

# YSA Ghana Website - Run Development Container

echo "🚀 Starting YSA Ghana Website in development mode..."

docker run -it --rm \
  --name ysa-ghana-dev \
  -p 3000:3000 \
  -v "$(pwd)":/app \
  -v /app/node_modules \
  -e NODE_ENV=development \
  -e CHOKIDAR_USEPOLLING=true \
  ysa-ghana:dev

echo "🛑 Development server stopped."