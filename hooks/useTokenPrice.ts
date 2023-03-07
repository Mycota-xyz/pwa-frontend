import { useQuery } from 'react-query';
import axios from 'axios';
import { STAGING_API_URL } from '@/config';

const fetchTokenPrice = (symbol: string) => {
    return axios.get(`${STAGING_API_URL}/oracle/spot/?&symbol=${symbol}`)
}

export const useTokenPrice = (symbol: string) => {
    return useQuery(['token', symbol], () => fetchTokenPrice(symbol), {
        select: (data) => {
            return data.data;
        }
    } )
}