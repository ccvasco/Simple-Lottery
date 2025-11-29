# Simple-Lottery

## Deploy the Lottery Smart Contract
1. Setup a `.env` file at the root of the project, and define `ANVIL_PRIVATE_KEY`. Then run: 
```
source .env
```

2. Start a new terminal session and run anvil:
```
anvil
```
3. Then run the below to deploy the smart-contract and generate the ABI in a JSON format for later interaction:
```
node scripts/deploy.js
```

The app is now ready to run:
```
npm run dev
```
