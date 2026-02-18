# Dockerfile for MCP Server Builder Platform
FROM node:20-alpine AS builder

WORKDIR /app

# Copy frontend package files
COPY frontend/package*.json ./frontend/

# Install dependencies
WORKDIR /app/frontend
RUN npm ci --only=production

# Copy frontend source
COPY frontend/ .

# Build the frontend
RUN npm run build

# Production image
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
