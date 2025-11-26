import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from 'react';
import { CurrentLottery } from '../components/CurrentLotteryTable.jsx';
import { JoinLottery } from "../components/JoinLottery.jsx";
import { Header } from '../components/Header.jsx';
import './HomePage.css';


export function HomePage() {
    const [lottery, setLottery] = useState([]);

    useEffect(() => {
        const getCurrentLottery = async () => {
            //viem call smart contract to get lottery data
            // const response = ...
            setLottery(/*response.data*/);
        }

        getCurrentLottery();
    }, []);

    return (
        <>
            <title>Simple Lottery</title>

            <Header />

            <div className="current-lottery">
                <CurrentLottery lottery={lottery} />
                <JoinLottery />
            </div>
        </>
    );
}