import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle} from 'react-icons/bs';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = "min-h-[60px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

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
        <div className="bg-app flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-10 py-10 px-4">
            <div className="flex flex-1 justify-start flex-col">
            {!currentAccount && (
            <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#4b4b4b] p-2 rounded-lg cursor-pointer hover:bg-zinc-800 transition duration-300"
            >
                <p className='text-white text-sm font-semibold'>Connection</p>
            </button>
            )}
            </div>

            <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
                <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-70 my-5 eth-card white-glassmorpism'>
                    <div className='flex justify-between flex-col w-full h-full'>
                        <div className='flex justify-between items-start'>
                            <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                            <SiEthereum fontSize={21} color="#fff"/>
                            </div>

                        </div>
                        <div>
                        <p className="text-white font-light text-sm">
                            {currentAccount}
                         </p>
                            <p className="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:w-96 w-full flex-col justify-start items-center white-glassmorphism">
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                    <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
                    <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />

                    <div className='h-[1px] w-full bg-gray-400 my-2'/>

                    {isLoading ? (
                        <Loader />
                    ) : (
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#746e9f] rounded-lg curser-pointer"
                        >
                        Send Now
                        </button>
                    )}

                </div>

            </div>

          </div>
        </div>
    );
}

export default Welcome;
