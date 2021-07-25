#!/bin/bash
echo "Starting build!"

# Install Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh
nvm install node

# get code from s3
aws s3 cp s3://ccspexperienceplatform/ccsp.zip ccsp.zip

# unzip code
unzip ccsp.zip
cd ccsp

# Install process manager for node.js (pm2), run app using pm2
npm install pm2 -g
pm2 start app.js --name ccsp
pm2 startup
pm2 save

# Install Nginx web server
amazon-linux-extras install nginx1.12 | "y"

# Set up Nginx
cd /etc/nginx
aws s3 cp s3://ccspexperienceplatform/nginx.conf nginx.conf
service nginx restart
chkconfig nginx on

echo "Build complete!"