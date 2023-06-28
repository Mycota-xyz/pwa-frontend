// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
// import Web3 from 'web3';
// import {configureChains, createConfig, WagmiConfig} from 'wagmi';
// import { arbitrum, mainnet, polygon } from 'wagmi/chains';
// import { WALLETCONNECT_PROJECT_ID } from '@/config';

// const chains = [arbitrum, mainnet, polygon];
// const projectId = WALLETCONNECT_PROJECT_ID;

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

// const wagmiConfig = createConfig({ 
//     autoConnect: true,
//     connectors: w3mConnectors({projectId, version: 1, chains}),
//     publicClient
// });

// const ethereumClient = new EthereumClient(wagmiConfig, chains);

// let web3: Web3 | null = null;

// ethereumClient.connect().then(provider => {
//   web3 = new Web3(provider);
// });

// export { ethereumClient, web3, wagmiConfig };