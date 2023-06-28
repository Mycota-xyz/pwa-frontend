import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TransactionHistoryProps } from '@/types/account'

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ account }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const txElements = [];
  
    useEffect(() => {
      const etherscanApiKey = '129AJ91MGA7RQX32AZM1XBTY828EM4K1BZ'; 
      const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanApiKey}`;
  
      const fetchTransactions = async () => {
        setLoading(true);
        try {
          await axios.get(url).then((response) => {
            setTransactions(response.data.result);
            setLoading(false);
          });
        } catch (error) {
          console.error(`Failed to fetch transaction history: ${error}`);
          setLoading(false);
        }
      }
  
      fetchTransactions();
      
    }, [account]);// re-run the effect when the account prop changes

    console.log(transactions);

    const array = Object.keys(transactions).map((key) => [key, transactions[key]]);

    const transactionListRows =  array?.map((tx, index) => ( 
        <tr key={index}>
            <th scope="row">{tx[1].blockNumber}</th>
            <td>{tx[1].to ? `${(tx[1].to).substring(0, 2)}...${(tx[1].to).slice(-6)}` : ''}</td>
            <td>{tx[1].value} wei</td>
        </tr>
    ))

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : 
        (
            <table className="table tokens-table transactions-table">
            <thead>
                <tr>
                <th scope="col">BlockNr.</th>
                <th scope="col">To</th>
                <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
                {transactionListRows}
            </tbody>
            </table>
        
        )}
      </div>
    )
  }
  
  export default TransactionHistory;