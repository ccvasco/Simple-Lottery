// import { useEffect } from "react";
import { useAccount } from 'wagmi';
import { useState } from 'react'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { ConfirmTransaction } from './ConfirmTransaction';
import './JoinButton.css';


export function JoinButton({ formattedPrice/*, onOpenModal, onCloseModal*/ }) {

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

        // onOpenModal?.();
    };

    function closePopUp() {
        // onCloseModal?.();
        setShowSendTransaction(false);
        setInputTickets('');
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
                <div 
                    className="popup"
                    onClick={closePopUp} // click outside to close
                >
                    <div 
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
                    >
                        <ConfirmTransaction
                            inputTickets={inputTickets}
                            formattedPrice={formattedPrice}
                            onClose={closePopUp}
                        />
                    </div>
                </div>
            )}
        </>

    );
}