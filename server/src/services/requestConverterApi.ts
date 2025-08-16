import dotenv from 'dotenv';
import axios from 'axios';
import { ResponseApi } from '../types/ResponseAPI';
import { ApiError } from '../exceptions/CustomizerException';

dotenv.config();

export default async function requestApi(
    source: string,
    to: string
): Promise<number> {
    const param = source + to;

    try {
        const url = `https://api.exchangerate.host/live?access_key=${process.env.API_KEY}&source=${source}`;

        const request = await axios.get(url);

        const response: ResponseApi = request.data;

        const result: number = response.quotes[param];

        return result;
    } catch (e: any) {
      
        console.error(e.message);
        throw new ApiError(500, e.message, 'INTERNAL_SERVER_ERROR');
    }
}
