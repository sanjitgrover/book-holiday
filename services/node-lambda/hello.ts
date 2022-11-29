import {v4} from 'uuid';
import {S3} from 'aws-sdk';

const s3Client = new S3();
async function handler(context: any, event: any){
    const buckets = await s3Client.listBuckets().promise();
    return {
        statusCode: 200,
        body: 'CDK Buckets' + JSON.stringify(buckets.Buckets)
    }
}

export {handler}