export type TokenType = {
    chainId: number,
    address: string,
    name: string,
    symbol: string,
    decimals: number,
    logoURI: string,
    extensions?: {
        bridgeInfo: {
            [key: number]: {
                tokenAddress: string,
            }
        }
    }
}

export interface TokenProps {
    token: TokenType,
}