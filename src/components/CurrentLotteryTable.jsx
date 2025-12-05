import { useRef, useEffect } from 'react'
import { useReadContract/*, useReadContracts*/ } from 'wagmi'
import { abi as simpleLotteryAbi, address as simpleLotteryAddress } from '../../scripts/abi/simpleLottery.json';
import { anvil } from 'wagmi/chains';
import './CurrentLotteryTable.css';

export function CurrentLotteryTable() {

           //scroll bar
        const chatMessagesRef = useRef(null);

        // useEffect(() => {
        //     const containerElement = chatMessagesRef.current;
        //     if (chatMessagesRef) {
        //         containerElement.scrollTop = containerElement.scrollHeight;
        //     }
        // }, []);

        const { data: round, isLoading: roundLoading/*, error: errorLoading*/ } = useReadContract({
                abi: simpleLotteryAbi,
                address: simpleLotteryAddress,
                functionName: 'round',
                chainId: anvil.id,
        });

        const { data: ticketsBought, isLoading, error } = useReadContract({
                abi: simpleLotteryAbi,
                address: simpleLotteryAddress,
                functionName: 'getTicketsBought',
                chainId: anvil.id,
                args: [round?.toString()],
                enabled: !!round,
        });

        

        if (roundLoading) return <div>Loading round...</div>
        if (isLoading) return <div>Loading purchases...</div>
        if (error) return <div>Error: {String(error.message ?? error)}</div>
        if (!ticketsBought) return <div>Lottery round has not started...</div>
    

        const truncateAddress = (address, start = 5, end = 3) => 
            address ? `${address.slice(0, start)}...${address.slice(-end)}` : '';
 

    return (
        <div className="ticket-list"
        style={{
        height: '250px',  // Fixed height required
        overflowY: 'scroll',
        padding: '10px',
      }}
        ref={chatMessagesRef}>
            {/* {lotteryTickets.length === 0 (
                <p>No tickets bought for the current lottery</p>
            )} */}

            <table className="lottery-table">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Timestamp</th>
                        <th># Tickets</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketsBought.map((t, i) => (
                        <tr key={i}>
                            <td>{truncateAddress(t.buyer)}</td>
                            <td>{new Date(Number(t.timestamp) * 1000).toLocaleString()}</td>
                            <td>{String(t.numberOfTickets)}</td>
                            <td>{Number(t.value)/1e18} ETH</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}