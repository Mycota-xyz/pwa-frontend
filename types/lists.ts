import { TokenType } from '@/types/tokens';

export type TokenListType = {
    name: string;
    timestamp: string;
    version: {
        major: number,
        minor: number,
        patch: number,
    };
    tokens: TokenType[];
    tags: Record<string, unknown>;
    logoURI: string;
    keywords: string[];
}

export interface TokenListProps {
   tokenList: Pick<TokenListType, 'tokens'>
}