import requestApi from '../../services/requestConverterApi';
jest.mock('../../services/requestConverterApi');

const mockedRequestApi = requestApi as jest.Mock;

mockedRequestApi.mockResolvedValueOnce({
    result: 5.21,
});

describe('should converter the USD Currency to BRL', () => {
    it('should return 200 and the value converted', async () => {
        const response = await requestApi('BRL', 'USD');

        expect(response).toBeDefined();
        expect(response).toStrictEqual({ result: 5.21 });
    });
});
