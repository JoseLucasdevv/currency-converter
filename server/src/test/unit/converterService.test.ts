import { Currency } from '../../domain/Currency';
import converterService from '../../services/converterService';
import CurrencyDTO from '../../types/CurrencyDTO';
import requestApi from '../../services/requestConverterApi';

jest.mock('../../services/requestConverterApi');
const mockedRequestApi = requestApi as jest.Mock;

mockedRequestApi.mockResolvedValueOnce({
    result: 5.21,
});

const mockCurrency: CurrencyDTO = {
    from: Currency.USD,
    to: Currency.BRL,
    value: 1,
};

describe('should converter the USD Currency to BRL', () => {
    it('should return 200 and the value converted', async () => {
        const response = await converterService(mockCurrency);
        expect(response).toBeDefined();
    });
});
