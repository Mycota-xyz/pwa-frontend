import React, {useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Web3Button, Web3NetworkSwitch, useWeb3Modal } from '@web3modal/react';
import { useRouter } from 'next/router';
import {useAccount} from 'wagmi';

const Login: React.FC = () => {
    const router = useRouter();
    const {isConnected} = useAccount();

    useEffect(() => {
        if (isConnected) {
          router.push('/account');
        }
    }, [isConnected]);

    return (
        <div className="d-flex flex-row login-section" id="login">
            <div className="login-header"/>
            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-md-6 mt-4 d-flex justify-content-end">
                        <Image src="/gate-illustration-1.svg" className="" alt="gate-illustration" width={260} height={382}></Image>
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <span className="login-h2">Welcome to</span>
                        <span className="login-h1">Mycota</span>
                        <span className="login-subtitle">{"Start your journey with Mycota Create. Secore, Safe, Easy to use. Let's get started!"}</span>
                        <br/>
                        <span className="login-subtitle">{"Join For Free!"}</span>
                        <br/>
                        <Web3Button label="Connect Wallet to Mycota" icon="hide"/>
                        <br/>
                        {/* <Web3NetworkSwitch/> */}
                        {/* <div className="login-actions">
                            <button className="login-button btn me-2">Sign up</button>
                            <button className="login-button btn">Login</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="login-footer"/>
        </div>
    );
};

export default Login;


