#!/bin/bash
echo "Exporting site data..."

cd /home/ec2-user/backup_data
echo "In backup_data directory..."

 ~/.nvm/versions/node/v16.5.0/bin/node json2xcl.js
#node json2xcl.js
echo "Creating file with timestamp appended..."

f_name=ccsp_experience_platform_"$(date +%FT%T)".xlsx
echo "Created file ccsp/data/excel_files/$f_name..."

mv data.xlsx ../ccsp/data/excel_files/$f_name
echo "Copying file to S3..."
aws s3 cp ../ccsp/data/excel_files/$f_name s3://ccspexperience/EXCEL_FILES/
echo "Exiting."
