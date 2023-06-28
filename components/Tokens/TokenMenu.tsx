import React, { useState } from 'react';
import { useTokenList } from '@/hooks/useTokenList';
import Image from 'next/image';


const TokenMenu: React.FC = () => {
    
    return (
        <div className="d-flex flex-column" id="tokenMenu">
            <div className="token-menu-divider"/>
            <div className="d-flex justify-content-evenly align-items-center px-5">
            <div className="token-menu-item">
                <Image src="/icon/sell-button-icon.svg" alt="buy" width={60} height={60}/>
                <div className="token-menu-item-text">Sell</div>
              </div>
              <div className="token-menu-item">
                <Image src="/icon/buy-button-icon.svg" alt="buy" width={60} height={60}/>
                <div className="token-menu-item-text">Buy</div>
              </div>
              <div className="token-menu-item">
                <Image src="/icon/swap-button-icon.svg" alt="buy" width={60} height={60}/>
                <div className="token-menu-item-text">Swap</div>
              </div>
            </div>
            <div className="token-menu-divider"/>
        </div>
    );
};

export default TokenMenu;