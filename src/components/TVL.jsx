
export function TVL( {formattedPrice, formattedPot, ticketsBought} ) {

    return (
        <>
            <div>
                TVL Component
                <p></p>
            </div>
            <div>
                Ticket Price: {formattedPrice} ETH
            </div>
            <div>
                Tickets Bought: {ticketsBought?.toString()}
            </div>
            <div>
                Pot: {formattedPot} ETH
            </div>
        </>
    );
}