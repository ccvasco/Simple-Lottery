### ConfirmTransaction.jsx:
-> add call simulation before actual call


### JoinButton.jsx
-> need to add additional validation. currently allows to type negative numbers. need whole positive
-> CSS to make confirm-join-transaction a popup

# SCs
### simpleLottery.sol
    struct ticketsBought {
        address buyer;
        uint256 timestamp;
        uint256 numberOfTickets;
        uint256 value;
    }
-> Need the **CurrentLotteryTable.jsx** to read from this
