import React, { useContext } from 'react';
import { SiEthereum } from 'react-icons/si';
import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';

const commonStyles = "min-h-[60px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 ourline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message} = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }

    return (
        <div className="bg-white flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-10 py-10 px-4">
            <div className="flex flex-1 justify-start flex-col md:mr-10">
            <h1 className='text-2xl sm:text-3xl py-1'>
                Envoyer un contrat
            </h1>
            <p className='mt-5 font-light md:w-9/12 w-11/12 text-base text-justify'>
                Grâce à Ethereum et la technologie blockchain,
                vous pouvez envoyer un document de manière immuable,
                addresser un message à un distinataire et lui transférer des actifs de manière sécurisé.
            </p>
            {!currentAccount && (
            <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-zinc-200 p-3 rounded-full cursor-pointer hover:bg-zinc-400"
            >
                <p className='text-base font-semibold'>Connection</p>
            </button>
            )}
                <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <a href="https://decentralized-projects.com" className={`rounded-tl-2xl ${commonStyles}`}>
                        Décentralisé
                        </a>
                        <a href="https://decentralized-projects.com" className={commonStyles}>
                        Securisé
                        </a>
                        <a href="https://decentralized-projects.com" className={`rounded-tr-2xl ${commonStyles}`}>
                        Immuable
                        </a>
                        <a href="https://decentralized-projects.com" className={`rounded-bl-2xl ${commonStyles}`}>
                        Traçable
                        </a>
                        <a href="https://decentralized-projects.com" className={commonStyles}>
                        Financier
                        </a>
                        <a href="https://decentralized-projects.com" className={`rounded-br-2xl ${commonStyles}`}>
                        Responsable
                        </a>
                </div>
            </div>

            <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
                <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-70 my-5 border-2'>
                    <div className='flex justify-between flex-col w-full h-full'>
                        <div className='flex justify-between items-start'>
                            {/* <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                            <SiEthereum fontSize={21} color="#fff"/>
                            </div> */}

                        </div>
                        <div>
                          <p className="font-semibold text-lg mt-1">
                             Compte Ethereum :
                          </p>
                          <p className="font-light text-sm">
                              {currentAccount}
                          </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:w-96 w-full flex-col justify-start items-center border-2 rounded-xl">
                    <div className="border-2 m-4 rounded-xl">
                      <Input placeholder="Address To" name="Test" type="text" handleChange={handleChange} />
                    </div>
                    <div className="border-2 m-4 rounded-xl">
                      <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                    </div>
                    <div className="border-2 m-4 rounded-xl">
                      <Input placeholder="Project" name="keyword" type="text" handleChange={handleChange} />
                    </div>
                    <div className="border-2 m-4 rounded-xl">
                      <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                    </div>

                    <div className='h-[1px] w-full bg-gray-400 my-2'/>

                    {isLoading ? (
                        <Loader />
                    ) : (
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full curser-pointer"
                        >
                        Envoyer
                        </button>
                    )}

                </div>

            </div>

          </div>
        </div>
    );
}

export default Welcome;
