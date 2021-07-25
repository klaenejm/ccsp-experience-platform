#!/bin/bash
echo "Starting build!"

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

# Install git
sudo yum install git | "y"

# get code from s3
aws s3 cp s3://ccspexp/ccsp.zip ccsp.zip

# unzip code
sudo unzip ccsp.zip

# Install process manager for node.js (pm2), run app using pm2
npm install pm2 -g
pm2 start app.js --name ccsp
pm2 startup
pm2 save

# Install Nginx web server
sudo amazon-linux-extras install nginx1.12 | "y"

# Set up Nginx
sudo nano /etc/nginx/nginx.conf
cd /etc/nginx
sudo aws s3 cp s3://ccspexp/nginx.conf nginx.conf
sudo service nginx restart
sudo chkconfig nginx on

echo "Build complete!"