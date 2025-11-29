import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { parseEther } from 'viem';
import { config } from 'dotenv';
import process from 'node:process';

config();
const anvilPrivateKey = process.env.ANVIL_PRIVATE_KEY;
if (!anvilPrivateKey) {
  throw new Error('ANVIL_PRIVATE_KEY not found in .env');
}

const client = createWalletClient({
  chain: {
    id: 31337,
    network: 'anvil',
    rpcUrls: {
      default: {
        http: ['http://127.0.0.1:8545'],
      },
    },
  },
  transport: http(),
});

// Use private key from one of Anvil's standard accounts
const account = privateKeyToAccount(anvilPrivateKey);

async function transfer() {
  const hash = await client.sendTransaction({
    account,
    to: '0x58f58c2d1c56e315467c7807758d6079916b6668',
    value: parseEther('9000'),
  });
  console.log('Transaction hash:', hash);
}

transfer();
