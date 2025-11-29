// import { useEffect } from "react";
import { useAccount } from 'wagmi';
import { useState } from 'react'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { ConfirmTransaction } from './ConfirmTransaction';


export function JoinButton({ formattedPrice }) {

    const [inputTickets, setInputTickets] = useState('');
    const [showSendTransaction, setShowSendTransaction] = useState(false);
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    function saveInputTickets(event) {
        setInputTickets(event.target.value);
    }

    function handleJoin() {

        if (!isConnected) {
            openConnectModal();
            return;
        }

        if (!inputTickets) {
            alert('Enter valid ticket count');
            return;
        }
        setShowSendTransaction(true);
    };

    function closePopup() {
        setShowSendTransaction(false);
    }


    return (
        <>
            <div>
                <input
                    className="tickets-placeholder"
                    size="0.5"
                    placeholder="Number of tickets"
                    type="number"
                    min="0"
                    step="1"
                    onChange={saveInputTickets}
                    value={inputTickets}//need to add additional validation. currently allows to type negative numbers. need whole positive integers only
                />
            </div>
            <button
                className="join-button"
                onClick={handleJoin}>
                Join
            </button>
            {showSendTransaction && (
                <div className="confirm-join-transaction"/*use CSS to make this a popup */ >
                    <ConfirmTransaction
                        inputTickets={inputTickets}
                        formattedPrice={formattedPrice}
                        onClose={closePopup} // Pass a callback to close popup
                    />
                </div>
            )}
        </>

    );
}