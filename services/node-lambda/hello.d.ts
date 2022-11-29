declare function handler(context: any, event: any): Promise<{
    statusCode: number;
    body: string;
}>;
export { handler };
