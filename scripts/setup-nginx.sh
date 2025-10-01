#!/bin/bash
set -e

# Dieses Script wird auf dem Server ausgeführt
# Erwartet Umgebungsvariablen: UUID, PORT

if [ -z "$UUID" ] || [ -z "$PORT" ]; then
  echo "Error: UUID and PORT environment variables are required"
  exit 1
fi

NGINX_AVAILABLE="/etc/nginx/sites-available/$UUID"
NGINX_ENABLED="/etc/nginx/sites-enabled/$UUID"
WEB_ROOT="/var/www/$UUID"

echo "Setting up Nginx configuration for $UUID on port $PORT..."

# Erstelle Web-Root falls nicht vorhanden
mkdir -p "$WEB_ROOT"

# Erstelle Nginx Config nur wenn sie noch nicht existiert
if [ ! -f "$NGINX_AVAILABLE" ]; then
  echo "Creating new Nginx configuration..."
  
  cat > /tmp/nginx-$UUID.conf << EOF
server {
    listen $PORT;
    server_name $UUID.iman-cloud.net;

    root $WEB_ROOT;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }

    access_log /var/log/nginx/$UUID.access.log;
    error_log  /var/log/nginx/$UUID.error.log;
}
EOF

  # Verschiebe Config mit sudo
  sudo mv /tmp/nginx-$UUID.conf "$NGINX_AVAILABLE"
  
  # Erstelle Symlink falls nicht vorhanden
  if [ ! -L "$NGINX_ENABLED" ]; then
    echo "Enabling site..."
    sudo ln -s "$NGINX_AVAILABLE" "$NGINX_ENABLED"
  fi
  
  echo "Nginx configuration created successfully"
else
  echo "Nginx configuration already exists, skipping creation"
fi

# Teste und reloade Nginx
echo "Testing Nginx configuration..."
sudo nginx -t

echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Nginx setup completed successfully!"