import { createContext, useEffect, useState } from "react";

// Create the CoinContext
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    // State to store all coin data
    const [allCoin, setAllCoin] = useState([]);
    // State to manage selected currency
    const [currency, setCurrency] = useState({
        name: "usd", // Currency name
        Symbol: "$"  // Currency symbol
    });

    // Fetch cryptocurrency data from CoinGecko API
    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json', 
                'x-cg-demo-api-key': 'CG-GR4mzpAHtzswP6oaUtZDj4bq' 
            }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res)) // Update state with fetched data
            .catch(err => console.error(err)); // Log any errors
    };

    // Fetch data whenever currency changes
    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    // Context value to be shared across components
    const contextValue = {
        allCoin,    // Fetched cryptocurrency data
        currency,   // Current currency details
        setCurrency // Function to update currency
    };

    return (
        // Provide the context value to child components
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
