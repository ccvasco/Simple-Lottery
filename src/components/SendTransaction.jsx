// // import { useState } from 'react'
// // import { useWriteContract } from 'wagmi'
// // import { parseEther } from 'viem';
// // import { abi as simpleLotteryAbi, address as simpleLottery } from '../../scripts/abi/simpleLottery.json';

// // export function SendTransaction({ inputTickets, amountToPay }) {

// //   const { data: walletClient } = useWalletClient();
// //   const [isSending, setIsSending] = useState(false);
// //   // const { writeContract } = useWriteContract()



// //   async function sendTransaction() {
// //     setIsSending(true);
// //     try {
// //       const receipt = await walletClient.writeContract({
// //         address: simpleLottery,
// //         abi: simpleLotteryAbi,
// //         functionName: 'enter',
// //         account: walletClient.account, // the connected signer
// //         value: parseEther(amountToPay.toString()),
// //       });
// //       console.log('Transaction receipt:', receipt);
// //     } catch (error) {
// //       console.error('Error sending transaction:', error);
// //     } finally {
// //       setIsSending(false);
// //     }
// //   }

// //   return (
// //     // if( isPending || isConfirmOpen ) {
// //     //   'Confirming...'
// //     // } else if (isConfirmOpen) {
// //     //   'Send Transaction'
// //     // }
// //     sendTransaction()
// //   );
// // }