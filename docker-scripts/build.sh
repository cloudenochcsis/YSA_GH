#!/bin/bash

# YSA Ghana Website - Docker Build Script

echo "🐳 Building YSA Ghana Website Docker Images..."

# Build development image
echo "📦 Building development image..."
docker build -f Dockerfile.dev -t ysa-ghana:dev .

# Build production image
echo "🚀 Building production image..."
docker build -f Dockerfile -t ysa-ghana:latest .

echo "✅ Docker images built successfully!"
echo ""
echo "Available images:"
docker images | grep ysa-ghana

echo ""
echo "To run development server:"
echo "  docker run -p 3000:3000 ysa-ghana:dev"
echo ""
echo "To run production server:"
echo "  docker run -p 3000:3000 ysa-ghana:latest"