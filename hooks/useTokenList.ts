import { useQuery } from 'react-query'
import axios from 'axios'
import { API_URL } from '@/config';
type onSuccessType = (data: any) => void;
type onErrorType = (error: any) => void;

export const fetchTokenList = () => {
    return axios.get(`${API_URL}utils/list`);
}

export const useTokenList = (onSuccess: onSuccessType, onError: onErrorType) => {
    return useQuery('tokenlist', fetchTokenList, {
        staleTime: 300000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        // fetch data on click
        enabled: false,
        onSuccess,
        onError,
        select: (data) => {
            const fetchedData = data.data.lists;
            let tokenList: { [key: string]: any }[] = [];
            for (let l in fetchedData) {
                tokenList = tokenList.concat(fetchedData[l].tokens);
            }
            // console.log(tokenList)
            return tokenList;
            }
        }
    );
}