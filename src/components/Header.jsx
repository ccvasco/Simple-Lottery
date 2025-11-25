import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from 'react-router';
import './header.css';
import viteLogo from '/vite.svg'

export function Header() {

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src={viteLogo} />
                        <img className="logo"
                            src={viteLogo} />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src={viteLogo} />
                    </button>
                </div>

                <div className="right-section">
                    <ConnectButton />
                </div>
            </div>
        </>
    );
}