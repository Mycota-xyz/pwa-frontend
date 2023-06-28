import React, { FC } from 'react';
import type { TokenProps } from '@/types/tokens';
import Link from 'next/link';
import { useTokenPrice } from '@/hooks/useTokenPrice';

const TokenListItem: FC<TokenProps> = ({token}: TokenProps): JSX.Element => {
    const { data: tokenPrice, isLoading, isError } = useTokenPrice(token.symbol);

    if(isLoading) {
        return <div className="d-flex justify-content-center my-1">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if(isError) {
        return <span>Error!</span>
    }

    return (
        <div className="d-flex justify-content-between align-items-center my-1" id="tokenListItem">
            <div className="d-flex align-items-center">
                <div className="mx-2">
                    <img src={token.logoURI} alt="logo" width="36px" height="36px" style={{borderRadius: "50%"}}/>
                </div>
                <span className="token-name mx-2">
                    {token.name}
                </span>
            </div>
            <div className="token-info me-2">
                <span className="token-amount">
                    {token.symbol}
                </span>
                <span className="token-price">
                    <span className="me-1">
                        {tokenPrice && tokenPrice.price ? tokenPrice.price.toFixed(2) : "N/A"}
                    </span>
                    {tokenPrice && tokenPrice.currency ? tokenPrice.currency.toUpperCase() : ""}
                </span>
            </div>
        </div>
    );
};

export default TokenListItem;