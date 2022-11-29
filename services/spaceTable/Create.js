"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const uuid_1 = require("uuid");
const dbClient = new aws_sdk_1.DynamoDB.DocumentClient();
async function handler(event, context) {
    const result = {
        statusCode: 200,
        body: 'DynamoDB insert'
    };
    const item = typeof event.body == 'object' ? event.body : JSON.parse(event.body);
    item.spaceId = uuid_1.v4();
    try {
        await dbClient.put({
            TableName: 'SpaceTable',
            Item: item
        });
    }
    catch (error) {
        result.body = error.message;
    }
    result.body = JSON.stringify(`Created item with Id: ${item.spaceId}`);
    return result;
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBRWpDLCtCQUF3QjtBQUV4QixNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFL0MsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUEyQixFQUFFLE9BQWU7SUFDL0QsTUFBTSxNQUFNLEdBQXVCO1FBQy9CLFVBQVUsRUFBQyxHQUFHO1FBQ2QsSUFBSSxFQUFDLGlCQUFpQjtLQUN6QixDQUFBO0lBQ0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUUsSUFBSSxDQUFDLE9BQU8sR0FBRSxTQUFFLEVBQUUsQ0FBQztJQUVuQixJQUFHO1FBQ0MsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2YsU0FBUyxFQUFFLFlBQVk7WUFDdkIsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7S0FDTDtJQUFBLE9BQU0sS0FBSyxFQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksR0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO0tBQzVCO0lBQ0QsTUFBTSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNwRSxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRU8sMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R5bmFtb0RCfSBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7QVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgQ29udGV4dH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQge3Y0fSBmcm9tICd1dWlkJztcblxuY29uc3QgZGJDbGllbnQgPSBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQsIGNvbnRleHQ6Q29udGV4dCk6UHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+e1xuICAgIGNvbnN0IHJlc3VsdDpBUElHYXRld2F5UHJveHlSZXN1bHQ9e1xuICAgICAgICBzdGF0dXNDb2RlOjIwMCxcbiAgICAgICAgYm9keTonRHluYW1vREIgaW5zZXJ0J1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdHlwZW9mIGV2ZW50LmJvZHkgPT0gJ29iamVjdCc/ZXZlbnQuYm9keTogSlNPTi5wYXJzZShldmVudC5ib2R5KTtcbiAgICBpdGVtLnNwYWNlSWQ9IHY0KCk7XG4gICAgXG4gICAgdHJ5e1xuICAgICAgICBhd2FpdCBkYkNsaWVudC5wdXQoe1xuICAgICAgICAgICAgVGFibGVOYW1lOiAnU3BhY2VUYWJsZScsXG4gICAgICAgICAgICBJdGVtOiBpdGVtXG4gICAgICAgIH0pXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmVzdWx0LmJvZHk9ZXJyb3IubWVzc2FnZVxuICAgIH1cbiAgICByZXN1bHQuYm9keT1KU09OLnN0cmluZ2lmeShgQ3JlYXRlZCBpdGVtIHdpdGggSWQ6ICR7aXRlbS5zcGFjZUlkfWApO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7aGFuZGxlcn0iXX0=