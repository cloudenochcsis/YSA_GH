#!/bin/bash

# YSA Ghana Website - Run Production Container

echo "🚀 Starting YSA Ghana Website in production mode..."

docker run -d \
  --name ysa-ghana-prod \
  -p 3000:3000 \
  -e NODE_ENV=production \
  --restart unless-stopped \
  ysa-ghana:latest

echo "✅ Production server started!"
echo "🌐 Website available at: http://localhost:3000"
echo ""
echo "To view logs: docker logs ysa-ghana-prod"
echo "To stop: docker stop ysa-ghana-prod"