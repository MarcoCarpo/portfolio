import { Handler } from '@netlify/functions';
import data from './data.json';

export const handler: Handler = async (event, context) => {
    const params = event.queryStringParameters;

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
