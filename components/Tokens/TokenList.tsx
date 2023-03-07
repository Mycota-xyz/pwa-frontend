import React from 'react';
import TokenListItem from '@/components/Tokens/TokenListItem';
import { useTokenList } from '@/hooks/useTokenList';
import Link from 'next/link';

const TokenList: React.FC = () => {
    const onSuccess = () => {
        console.log('Perform side effect after data fetching.');
    }
    const onError = () => {
        console.log('Perform side effect after encountering an error.')
    }

    const {isLoading, data, isError, error, isFetching, refetch} = useTokenList(onSuccess, onError);

    console.log(isLoading, isFetching);

    if(isLoading || isFetching) {
        return <div>Loading...</div>;
    }

    if(isError) {
        return <div>{error?.message}</div>
    }

    return (
        <>
            <h1>Token List</h1>
            <button onClick={refetch}>Fetch Token List</button>
            {/* an object with the type { [key: string]: any } (i.e., an object with arbitrary keys and values of any type) is being used where a TokenType object is expected */}
                {data?.map((token, index) => {
                    return (
                        <TokenListItem key={index} token={token}/>
                    )
                    // return (
                    //     <li key={index}>
                    //         <Link href={`/token/${token.address}`}>
                    //             {token.name}
                    //         </Link>
                    //     </li>
                    // )
                })}
        </>
    );
};

export default TokenList;