import { Request, Response } from 'express';
import CurrencyDTO from '../types/CurrencyDTO';
import converterService from '../services/converterService';
import { CurrencyResponseDTO } from '../types/CurrencyResponseDTO';
import { ApiError } from '../exceptions/CustomizerException';

export default async function converterResource(req: Request, res: Response) {
    const currencyDTO: CurrencyDTO = req.body;
    if (
        !currencyDTO ||
        !currencyDTO.from ||
        !currencyDTO.to ||
        !currencyDTO.value
    ) {
        throw new ApiError(
            400,
            'the body request is missing',
            'MISSING_FIELDS'
        );
    }

    const currencyResponseDTO: CurrencyResponseDTO =
        await converterService(currencyDTO);

    return res.json(currencyResponseDTO).status(200);
}
