import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {

    return (
        <div className=" m-5 flex flex-1
          2xl:min-w-[450px]
          2xl:max-w-[500px]
          sm:min-w-[370px]
          sm:max-w-[450px]
          min-w-full
          flex-col p-3 rounded-md hover:shadow-2xl bg-zinc-300"
        >
          <div className="flex flex-col items-center w-full mt-3 text-justify ">
            <div className="display-flex justify-start w-full mb-6 p-2">
              <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                <p className="text-base"><strong>Demandeur : </strong> {shortenAddress(addressFrom)}</p>
              </a>
              <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                <p className="text-base"><strong>Destinataire : </strong> {shortenAddress(addressTo)}</p>
              </a>
              <p className="text-base"><strong>Montant: </strong> {amount} ETH</p>
              {message && (
                <>
                 <br />
                 <p className="text-base"><strong>Préambule: </strong> {keyword}</p>
                  <br />
                  <p className="text-base"><strong>Clauses: </strong> {message}</p>
               </>
              )}
            </div>
            <div className="p-2 bg-zinc-100 px-5 w-max rounded-3xl -mt-5 mb-2">
              <p className="font-thin">{timestamp}</p>
            </div>
          </div>
        </div>
      );
    };

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
    <div className='flex w-full justify-center items-center 2xl:px-20'>
        <div className='flex flex-col md:p-12 px-4'>
            {currentAccount ? (
                <h3 className='text-2xl text-center my-2'>HISTORIQUE</h3>
            ) : (
                <h3 className='text-2xl text-center my-2'>Connect your account to see transactions</h3>
            )}

            <div className='flex flex-wrap justify-center items-center mt-10'>
                {transactions .reverse().map((transaction, i) => (
                    <TransactionCard key={i} {...transaction} />
                ))}
            </div>
        </div>
    </div>
);
}

export default Transactions;
