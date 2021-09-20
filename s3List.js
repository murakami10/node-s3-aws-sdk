const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client({ region: process.env.AWS_REGION });

const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log('Success', data.Buckets);
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};

run();
