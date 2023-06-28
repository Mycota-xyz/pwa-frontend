import { useRouter } from 'next/router';
import { useToken } from '@/hooks/useToken';
import { useTokenSymbol } from '@/hooks/useTokenSymbol';
import { useTokenPrice } from '@/hooks/useTokenPrice';
import Image from 'next/image'
import TokenMenu from '@/components/Tokens/TokenMenu';

const Token = () => {
    const router = useRouter();
    const address = router.query.address as string;
    const {isLoading, data: token, isError, error} = useToken(address);
    const {data: symbol} = useTokenSymbol(address);
    const { data: price } = useTokenPrice(symbol);

    console.log(token);

    if (isLoading) {
      return <h2>Loading...</h2>
    }

    if (isError) {
      return <h2>Error</h2>
    }

    return (
      <div>
          <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="d-flex align-items-center ms-2">
                  <Image src="/icon/breadcrumb-back.svg" alt="back" width={32} height={32} onClick={() => router.back()} style={{ cursor: 'pointer' }}/>
                  <div className="breadcrumb-title ms-2">{token.name}({token.symbol})</div>
              </div>
          </div>
          <div className="d-flex ps-5">
              <span className="me-1">{price?.price}</span>
              <span>{price?.currency.toUpperCase()}</span>
          </div>
          <div className="d-flex justify-content-center mt-5">
            {token.symbol === 'WETH' ? (
              <Image src="/logo/eth-logo.svg" alt={token.symbol} width={80} height={127}/>
            ): (
              <Image src={token.logoURI} alt={token.symbol} width={150} height={150}/>
            )}
          </div>
          <div className="asset-amount">
            1 ETH
          </div>
          <div className="asset-amount-value">
            <span className="me-1">{price?.price}</span>
            <span>{price?.currency.toUpperCase()}</span>
          </div>
          <TokenMenu/>
          <div className="asset-amount-tx-info text-center mt-5">No Transactions to show</div>
      </div>
    );
};

export default Token;