const { S3Client } = require('@aws-sdk/client-s3');
require('dotenv').config();

console.log(process.env.AWS_REGION);
const s3Client = new S3Client({ region: process.env.AWS_REGION });
