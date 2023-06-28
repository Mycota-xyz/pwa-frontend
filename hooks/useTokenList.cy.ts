import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {useTokenList} from './useTokenList';
import {TokenType} from '@/types/tokens';


const tokenListMock = [{
    chainId: 1,
    address: "test_address",
    name: "test_name",
    symbol: "test_symbol",
    decimals: 18,
    logoURI: "test_uri",
    extensions: {
        bridgeInfo: {
            1: {
                tokenAddress: "test_tokenAddress",
            }
        }
    }
}];

interface UseTokenListResult {
    data: TokenType[] | undefined,
    status: 'idle' | 'loading' | 'success' | 'error',
}

describe ("useTokenList", () => {
    const queryClient = new QueryClient();

    context("when called with a valid chainId", () => {
        it("should return a token list", () => {
            cy.intercept(
                {
                    method: "GET",
                    url: 'https://backend-dex-service-4gxpnuf26a-ez.a.run.app/api/v1/utils/list',
                }, 
                [tokenListMock]
            ).as ('getTokenList');

            let result: UseTokenListResult;

            const onSuccess = () => console.log('Query succeeded');
            const onError = () => console.log('Query failed');


            function HookWrapper() {
                const {data, status} = useTokenList(onSuccess, onError);
                result = {data, status};
                return null;
            }

            cy.wait('@getTokenList').then(() => {
                expect(result.status).to.equal('success');
                expect (result.data).to.be.an('array');
                expect(result.data).to.deep.equal(tokenListMock);
            });

            mount(
                <QueryClientProvider client={queryClient}>
                    <HookWrapper />
                </QueryClientProvider>
            );

            HookWrapper();
        })
    });
});