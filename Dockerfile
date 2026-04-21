# Use a lightweight web server for static files
FROM nginx:alpine

# Copy static files to the nginx public directory
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
