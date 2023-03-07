import { API_URL } from '@/config';
import axios from 'axios';

export const getTokenList = async (filter?: string, chain?: string): Promise<any> => {
    const { data } = await axios.get(`${API_URL}utils/list?filters=${filter}&chainIds=${chain}`);
    console.log(`list ${filter} fetched`);
    return data;
};