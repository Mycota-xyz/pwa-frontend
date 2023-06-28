import AccountLayout from './layout'
import TransactionHistory from '@/components/Account/TransactionHistory'
import React, { useEffect, useState } from 'react';
import {useAccount} from 'wagmi';
import { Web3Button } from '@web3modal/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

let Web3 = require('web3');

export default function AccountPage() {
    const { isConnected } = useAccount();
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState(null);
    const [balance, setBalance] = useState(0);
    const router = useRouter();

    useEffect(() => {
        window.ethereum ?
            ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
            setAddress(accounts[0])
            let w3 = new Web3(ethereum)
            setWeb3(w3)
            console.log(address);
            }).catch((err) => console.log(err))
        : console.log("Please install MetaMask")
    },[address])

    useEffect(() => {
        if (web3 && address) {
            web3.eth.getBalance(address).then(result => {
                setBalance(web3.utils.fromWei(result, 'ether')); // Converting balance from Wei to Ether
            }).catch((err) => console.log(err));
        }
    }, [web3, address]);

    useEffect(() => {
        if (isConnected === false) {
            router.push('/');
        }
    }, [isConnected])

    return (
        <AccountLayout>
            <div id="account">
                <div className="account-header p-2 m-2">
                    <div className="d-flex flex-column mb-2">
                        <div className="account-header-address">Account:</div>
                        <div className="account-header-address-value">{address}</div>
                        <div className="account-header-balance-value d-flex justify-content-centre align-items-centre my-2">
                           <div className="me-2">{balance}</div>
                           <Image src="/logo/eth-logo.svg" alt='eth' width={20} height={32}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Web3Button label="Wallet" icon="hide"/>
                    </div>
                </div>
                <div className="account-transactions">
                    <TransactionHistory account={address}/>
                </div>
            </div>
        </AccountLayout>
    )
}