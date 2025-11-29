import { JoinButton } from './JoinButton.jsx';
import { TVL } from './TVL.jsx';
import './JoinLottery.css';
import { useReadContract, useReadContracts } from 'wagmi'
import { abi as simpleLotteryAbi, address as simpleLotteryAddress } from '../../scripts/abi/simpleLottery.json';
import { formatEther } from 'viem';
import { anvil } from 'wagmi/chains';
export function JoinLottery() {


    const { data: contractData, isLoading, error } = useReadContracts({
        contracts: [
            {
                abi: simpleLotteryAbi,
                address: simpleLotteryAddress,
                functionName: 'ticketPrice',
                chainId: anvil.id,
            },
            {
                abi: simpleLotteryAbi,
                address: simpleLotteryAddress,
                functionName: 'round',
                chainId: anvil.id,
            },
            {
                abi: simpleLotteryAbi,
                address: simpleLotteryAddress,
                functionName: 'pot',
                chainId: anvil.id,
            },
        ]
    });
   


    // const [price, round, pot] = contractData || [];
    const price = contractData?.[0]?.result;
    const round = contractData?.[1]?.result;
    const pot = contractData?.[2]?.result;
    const formattedPrice = price ? formatEther(price) : 'NA';
    const formattedPot = price ? formatEther(pot) : 'NA';

    const { data: ticketsBought/*, isLoading, error*/ } = useReadContract({
            abi: simpleLotteryAbi,
            address: simpleLotteryAddress,
            functionName: 'totalTicketsBought',
            chainId: anvil.id,
            args: [round?.toString()],
            enabled: !!round,
    });


    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="join-lottery">
            <div className="tvl-component">
                <TVL formattedPrice={formattedPrice} formattedPot={formattedPot} ticketsBought={ticketsBought}/>
            </div>
            <div className="join-button-component">
                <JoinButton formattedPrice={formattedPrice} />
            </div>
        </div>
    );
}