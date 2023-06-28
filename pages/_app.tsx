import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools';
import {config} from '../lib/react-query-config';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { WALLETCONNECT_PROJECT_ID } from '@/config'
import Head from 'next/head'

const chains = [arbitrum, mainnet, polygon]
const projectId = WALLETCONNECT_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({projectId, version: 1, chains}),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(config));
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <Component {...pageProps} />
        </Hydrate>
        {/*React Query Developer Settings Icon*/}
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
      <Web3Modal 
      projectId={projectId}
      ethereumClient={ethereumClient}
      themeVariables={{
        '--w3m-font-family': 'Poppins, sans-serif',
        '--w3m-accent-color': '#6C75E4',
        '--w3m-accent-fill-color': '#FFFFFF',
        '--w3m-background-color': '#2C346B',
        '--w3m-color-bg-1': '#211D4A',
        '--w3m-color-bg-3': '#ffffff',
        '--w3m-logo-image-url': 'logo/logo-connect-v2.svg',
        '--w3m-button-border-radius': '12px',
        '--w3m-z-index': '2000'
      }}
      />
    </WagmiConfig>
  )
}

