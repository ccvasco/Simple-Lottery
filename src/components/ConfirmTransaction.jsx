import { useState } from 'react'
import { useWriteContract, useWalletClient } from 'wagmi'
import { parseEther } from 'viem';
import { abi as simpleLotteryAbi, address as simpleLottery } from '../../scripts/abi/simpleLottery.json';
import './ConfirmTransaction.css';

export function ConfirmTransaction({ inputTickets, formattedPrice, onClose }) {


    const { data: walletClient } = useWalletClient();
            console.log('walletClient:', walletClient);

    const [isConfirmed, setIsConfirmed] = useState(false);
    const amountToPay = Number(inputTickets) * Number(formattedPrice);

    if (isConfirmed) {
        enterLottery();
    }

    //add call simulation before actual call

    async function enterLottery() {
        try {
            const receipt = await walletClient.writeContract({
                address: simpleLottery,
                abi: simpleLotteryAbi,
                functionName: 'enter',
                account: walletClient.account,
                value: parseEther(amountToPay.toString()),
            });
            console.log('Transaction receipt:', receipt);
        } catch (error) {
            console.error('Error sending transaction:', error);
        } finally {
            setIsConfirmed(false);
        }
    }

    function handleCancel() {
        setIsConfirmed(false);
        onClose();
    }


    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 shadow-xl">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Confirm Transaction</h3>
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-lg font-semibold text-gray-900">
                            Pay: {amountToPay.toFixed(4)} ETH
                        </p>
                        <p className="text-gray-600 mt-1">
                            for {inputTickets} tickets
                        </p>
                    </div>
                    <div className="confirm-transaction-buttons">
                        <button className="transaction-button" onClick={handleCancel}>Cancel</button>
                        <button className="transaction-button" onClick={() => setIsConfirmed(true)}>Confirm & Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// {/* {hash && <div>Hash: {hash}</div>}
//             {error && <div>Error: {error.message}</div>}
//             {isSuccess && <div>Transaction sent!</div>} */}
//         </div >

//     );
// }

// {/* <button onClick={handleSend} /*disabled={isPending || isConfirmOpen}*/>
//     {/* {isPending ? 'Confirming...' : 'Send Transaction'} */}
// </button> */}