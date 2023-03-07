import { useRouter } from 'next/router';
import { useToken } from '@/hooks/useToken';
import { useTokenSymbol } from '@/hooks/useTokenSymbol';
import { useTokenPrice } from '@/hooks/useTokenPrice';
import Image from 'next/image'

const Token = () => {
    const router = useRouter();
    const address = router.query.address as string;
    const {isLoading, data: token, isError, error} = useToken(address);
    const {data: symbol} = useTokenSymbol(address);
    const { data: price } = useTokenPrice(symbol);

    if (isLoading) {
      return <h2>Loading...</h2>
    }

    if (isError) {
      return <h2>{error?.message}</h2>
    }

    return (
      <div>
        <span style={{'background': '#555555', 'display': 'block'}}>{symbol}</span>
        {/* need to configure access to url *}
        {/* <span>
          <Image src={token?.logoURI} alt={token?.name} width={100} height={100}/>
        </span> */}
        <span style={{'background': '#666666', 'display': 'block'}}>{price?.price} {price?.currency}</span>
      </div>
    );
};

export default Token;