import { JoinButton } from './JoinButton.jsx';
import { TVL } from './TVL.jsx';
import './JoinLottery.css';

export function JoinLottery() {

    return (
        <div className="join-lottery">
            <div className="tvl-component">
                <TVL />
            </div>
            <div className="join-button-component">
                <JoinButton />
            </div>
        </div>
    );
}