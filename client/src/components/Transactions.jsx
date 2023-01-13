import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {

    return (
        <div className=" m-5 flex flex-1

          flex-col p-3 rounded-md hover:shadow-2xl bg-[#1d1d1d]"
        >
          <div className="flex flex-col items-center w-full mt-3 text-justify">
            <div className="display-flex justify-start w-full mb-6 p-2">
              <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                <p className="text-base"><strong className='text-[#626262]'>From : </strong> {shortenAddress(addressFrom)}</p>
              </a>
              <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                <p className="text-base"><strong className='text-[#626262]'>To : </strong> {shortenAddress(addressTo)}</p>
              </a>
              <p className="text-sm"><strong className='text-[#626262]'>Amont: </strong> {amount} ETH</p>
              {message && (
                <>
                 <br />
                 <p className="text-sm"><strong className='text-[#626262]'>Keyword: </strong> {keyword}</p>
                  <br />
                  <p className="text-sm"><strong className='text-[#626262]' >Message: </strong> {message}</p>
               </>
              )}
            </div>
            <div className="p-1 px-5 w-max rounded-xl -mt-5 mb-2">
              <p className="text-sm">{timestamp}</p>
            </div>
          </div>
        </div>
      );
    };

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
    <div className='bg-app text-[#ebebeb] justify-center items-center 2xl:px-20'>
        <div className='md:p-12 px-4'>
            {currentAccount ? (
                <h3 className='text-xl font-semibold text-center pb-5 pt-10'>TRANSACTIONS</h3>
            ) : (
                <h3 className='text-lg text-center my-2'>Connect your wallet to see transactions</h3>
            )}

            <div className='justify-center items-center mt-10'>
                {transactions .map((transaction, i) => (
                    <TransactionCard key={i} {...transaction} />
                ))}
            </div>
        </div>
    </div>
);
}

export default Transactions;
