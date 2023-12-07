import { Handler } from '@netlify/functions';
import data from './data.json';

export const handler: Handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
