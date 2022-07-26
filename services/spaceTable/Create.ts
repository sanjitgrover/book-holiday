import {DynamoDB} from 'aws-sdk';
import {APIGatewayProxyEvent, APIGatewayProxyResult, Context} from 'aws-lambda';
import {v4} from 'uuid';

const dbClient = new DynamoDB.DocumentClient();

async function handler(event: APIGatewayProxyEvent, context:Context):Promise<APIGatewayProxyResult>{
    const result:APIGatewayProxyResult={
        statusCode:200,
        body:'DynamoDB insert'
    }
    const item = typeof event.body == 'object'?event.body: JSON.parse(event.body);
    item.spaceId= v4();
    
    try{
        await dbClient.put({
            TableName: 'SpaceTable',
            Item: item
        })
    }catch(error){
        result.body='error'
    }
    console.log(result);
    result.body=JSON.stringify(`Created item with Id: ${item.spaceId}`);
    return result;
}

export {handler}