// API Configuration

const API_URL: string = 'https://backend-dex-service-4gxpnuf26a-ez.a.run.app/api/v1/';
const STAGING_API_URL: string = 'https://backend-dex-service-staging-4gxpnuf26a-ez.a.run.app/api/v1/';

// Token lists
const tokenListUrl = (filter?: string, chain?: string) => `${API_URL}utils/list?filters=${filter}&chainIds=${chain}`;


export {
    API_URL,
    tokenListUrl,
    STAGING_API_URL
};