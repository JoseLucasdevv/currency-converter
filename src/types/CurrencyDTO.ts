import { Currency } from '../domain/Currency';

type CurrencyDTO = {
    from: Currency;
    to: Currency;
    value: number;
};

export = CurrencyDTO;
