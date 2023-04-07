# Etherscan Gas Price Monitor
This React application displays the current gas price on the Ethereum network in real-time. The app fetches the gas price data from the Etherscan API and updates the displayed value every 10 seconds. This tool can be useful for Ethereum users who want to keep track of gas prices to optimize transaction costs.

## Features
Real-time gas price updates every 10 seconds

Uses the Etherscan API to fetch gas price data

Secure handling of Etherscan API key with environment variables

Simple and clean user interface


## Setup
To set up the Etherscan Gas Price Monitor, follow these steps:

### Clone the repository:

git clone https://github.com/yourusername/etherscan-gas-price.git
cd etherscan-gas-price

### Install the required dependencies:

npm install

### Create a .env.local file to store your Etherscan API key:

touch .env.local

### Open the .env.local file and add your Etherscan API key:

REACT_APP_ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY

Replace YOUR_ETHERSCAN_API_KEY with your actual Etherscan API key. You can obtain one by signing up at https://etherscan.io/myapikey.

### Start the development server:

npm start

The Etherscan Gas Price Monitor app should now be running on http://localhost:3000.