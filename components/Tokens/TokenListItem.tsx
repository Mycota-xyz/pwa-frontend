import React, { FC } from 'react';
import type { TokenProps } from '@/types/tokens';
import Link from 'next/link';

const TokenListItem: FC<TokenProps> = ({token}: TokenProps): JSX.Element => {

    return (
        <div style={{background: '#f5f5f5', margin: 5}}>
            <Link href={`/token/${token.address}`}>
                {token.name}
            </Link>
        </div>
    );
};

export default TokenListItem;