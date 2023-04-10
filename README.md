# Etherscan Gas Price Monitor
This React application displays the current gas price on the Ethereum network in real-time. The app fetches the gas price data from the Etherscan API and updates the displayed value every 10 seconds. This tool can be useful for Ethereum users who want to keep track of gas prices to optimize transaction costs.

## Features
Displays the current gas price in Gwei format

Automatically refreshes gas price data every 10 seconds

Countdown timer showing the time remaining until the next refresh

Responsive and mobile-friendly design


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

### Technologies Used
React

Etherscan API

Axios

Styled Components

Create React App

Netlify (for deployment)
