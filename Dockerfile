# Use a lightweight web server for static files
FROM nginx:alpine

# Support Cloud Run's $PORT requirement (defaults to 8080)
RUN sed -i 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Copy static files to the nginx public directory
COPY public /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
