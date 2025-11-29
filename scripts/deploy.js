import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config(); // Load .env file
const anvilPrivateKey = process.env.ANVIL_PRIVATE_KEY;
if (!anvilPrivateKey) {
  throw new Error('ANVIL_PRIVATE_KEY not found in .env');
}

async function deployContract() {

    //as these are ES modules, we need to recreate __dirname






  return new Promise((resolve, reject) => {
    exec(
      'cd src/smart-contracts/;forge script script/deploySimpleLottery.s.sol:DeployLottery --rpc-url http://127.0.0.1:8545 --private-key ${ANVIL_PRIVATE_KEY} --broadcast',
      (error, stdout,) => {
        if (error) {
          return reject(error);
        }
        console.log(stdout);

        // Parse deployed address from stdout (adjust parsing as needed)
        // ethereum addresses are hexadecimal strings starting with '0x' and are 42 characters long
        // Hex of 9 is 9, of 10 is A, 11 is B, and so on, until 15
        const match = stdout.match(/Deployed at:\s+(0x[a-fA-F0-9]{40})/);
        const deployedAddress = match ? match[1] : null;

        // Read ABI from out folder
        const abiFilePath = path.resolve(__dirname, '../src/smart-contracts/out/simpleLottery.sol/SimpleLottery.json');
        const artifact = JSON.parse(fs.readFileSync(abiFilePath, 'utf8'));

        if (!deployedAddress) {
          return reject(new Error('Failed to parse deployed address'));
        }

        resolve({
          address: deployedAddress,
          abi: artifact.abi,
        });
      }
    );
  });
}

deployContract()
  .then(({ address, abi }) => {
    console.log('Deployed address:', address);
    
    const outputJson = {
      address,
      abi,
    };

    const outputFilePath = path.resolve(__dirname, './abi/simpleLottery.json');

    fs.writeFileSync(outputFilePath, JSON.stringify(outputJson, null, 2), 'utf8');

    console.log(`ABI written to: ${outputFilePath}`);
  })
  .catch(console.error);
