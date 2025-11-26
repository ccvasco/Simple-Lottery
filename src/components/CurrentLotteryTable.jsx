import './CurrentLotteryTable.css';

export function CurrentLottery({ lottery }) {

    // const lotteryTickets = /* viem call to tickets bought */

    return (
        <div className="ticket-list">
            {/* {lotteryTickets.length === 0 (
                <p>No tickets bought for the current lottery</p>
            )} */}

            <table className="lottery-table">
                <tr>
                    <th>Address</th>
                    <th>Timestamp</th>
                    <th>Number of Tickets</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Ana</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>João</td>
                    <td>30</td>
                </tr>
            </table>

        </div>
    );
}