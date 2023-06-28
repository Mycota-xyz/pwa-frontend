import { useQuery } from 'react-query';
import axios from 'axios';
import { STAGING_API_URL } from '@/config';

const fetchToken = (address: string) => {
    return axios.get(`${STAGING_API_URL}/utils/token/${address}`)
}

export const useToken = (address: string) => {
    return useQuery(['token', address], () => fetchToken(address), {
        select: (data) => {
            return data.data;
        }
    } )
}