# ==========================================
# Multi-Stage Build for Google Cloud Run
# ==========================================

# Stage 1: Build the Vite production bundle
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install clean dependencies
RUN npm ci

# Copy application source code
COPY . .

# Build production assets into /app/dist
RUN npm run build

# Stage 2: Production NGINX runtime
FROM nginx:alpine

# Remove default nginx static site
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom NGINX configuration (configured for port 8080)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy HTTP Basic Auth credentials
COPY .htpasswd /etc/nginx/.htpasswd
RUN chmod 644 /etc/nginx/.htpasswd

# Google Cloud Run default port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
