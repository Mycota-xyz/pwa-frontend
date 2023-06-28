import React, { useState } from 'react';
import { useTokenList } from '@/hooks/useTokenList';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TokenListItem from './TokenListItem';


const TokenList: React.FC = () => {
    const onSuccess = () => {
        console.log('Perform side effect after data fetching.');
    }
    const onError = () => {
        console.log('Perform side effect after encountering an error.')
    }
    const router = useRouter();
    // Custom hook
    const {isLoading, data, isError, error, isFetching, refetch} = useTokenList(onSuccess, onError);
    // Search Input Field
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchActive, setSearchActive] = useState(false);
    const filteredData = data?.filter(token => 
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if(isLoading || isFetching) {
        return <div className="loading">Loading...</div>;
    }

    if(isError) {
        return <div className="error">{error?.message}</div>
    }

    const tokenListRows =  filteredData?.map((element, index) => ( 
        <div key={index} onClick={() => tokenListRedirect(element)}>
                <TokenListItem token={element}/>
        </div>
    ))

    const tokenListRedirect = (token: any) => {
        let path = `/token/${token.address}`;
        router.push(path);   
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex align-items-center ms-2">
                    <Image src="/icon/breadcrumb-back.svg" alt="back" width={32} height={32}/>
                    <div className="breadcrumb-title ms-2">Tokens</div>
                </div>
                {isSearchActive ? (
                    <div className="me-3">
                        <Image src="/icon/search-button-active.svg" alt="search" width={22} height={22} onClick={() => setSearchActive(false)}/>
                    </div>
                ) : (
                    <div className="me-3">
                        <Image src="/icon/search-button.svg" alt="search" width={22} height={22} onClick={() => setSearchActive(true)}/>
                    </div>
                )}
            </div>
            {isSearchActive &&
                <div className="mx-2">
                    <input 
                        type="text" 
                        placeholder="Search Name or Symbol..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-100 px-3 tokens-search-input"
                    />
                </div>
            }
            <table className="table tokens-table">
                <tbody>{tokenListRows}</tbody>
            </table>
        </>
    );
};

export default TokenList;