import { Currency } from '../domain/Currency';
import { ApiError } from '../exceptions/CustomizerException';
import CurrencyDTO from '../types/CurrencyDTO';
import { CurrencyResponseDTO } from '../types/CurrencyResponseDTO';
import requestApi from './requestConverterApi';

export default async function converterService(currencyDTO: CurrencyDTO) {
    if (currencyDTO.value < 1) {
        throw new ApiError(
            400,
            'The value for quantity must be at least 1.',
            'VALUE_TOO_LOW'
        );
    }
    if (!Object.values(Currency).includes(currencyDTO.from as Currency)) {
        throw new ApiError(
            400,
            'The value for FROM is not supported',
            'UNSUPPORTED VALUE'
        );
    }
    if (!Object.values(Currency).includes(currencyDTO.to as Currency)) {
        throw new ApiError(
            400,
            'The value for FROM is not supported',
            'UNSUPPORTED VALUE'
        );
    }
    if (currencyDTO.from === currencyDTO.to) {
        throw new ApiError(
            400,
            'The value for FROM and TO are the same.',
            'THE SAME VALUE'
        );
    }

    const differenceBetween = await requestApi(
        currencyDTO.from.toString(),
        currencyDTO.to.toString()
    );

    const resultSum: number = Number(
        (differenceBetween * currencyDTO.value).toFixed(2)
    );

    const currencyResponseDTO: CurrencyResponseDTO = {
        result: resultSum,
    };

    return currencyResponseDTO;
}
