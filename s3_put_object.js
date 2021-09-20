import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from './lib/s3Client.js';
import { config } from 'dotenv';
config();

const bucketParams = {
  Bucket: process.env.BUCKET_NAME,
  Key: 'aiueo.txt',
  Body: 'aaa',
};

export const run = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    // return data;
    console.log(
      'Successfully uploaded object: ' +
        bucketParams.Bucket +
        '/' +
        bucketParams.Key
    );
  } catch (err) {
    console.log('Error', err);
  }
};
run();
