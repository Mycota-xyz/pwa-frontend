import { useQuery } from 'react-query'
import axios from 'axios'
import { API_URL } from '@/config';
type onSuccessType = (data: any) => void;
type onErrorType = (error: any) => void;
import {TokenType} from '@/types/tokens';

// Fetch token list from DEX API
export const fetchTokenList = () => {
    return axios.get(`${API_URL}utils/list`);
}

export const useTokenList = (onSuccess: onSuccessType, onError: onErrorType) => {
    return useQuery('tokenlist', fetchTokenList, {
        staleTime: 300000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        // fetch data on click disabled
        enabled: true,
        onSuccess,
        onError,
        select: (data) => {
            const fetchedData = data.data.lists;
            let tokenList: TokenType[] = [];
            for (let l in fetchedData) {
                tokenList = tokenList.concat(fetchedData[l].tokens);
            }
            return tokenList;
            }
        }
    );
}

