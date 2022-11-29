import {v4} from 'uuid';

async function handler(context: any, event: any){
    return {
        statusCode: 200,
        statusBody: 'CDK Setup' + v4()
    }
}