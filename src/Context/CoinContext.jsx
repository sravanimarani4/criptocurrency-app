import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

function CoinContextProvider(props) {
  const [allCoinsData, setAllCoinsData] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-JcEECBRfY8c2tweS1FdMti2Y	",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoinsData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = {
    allCoinsData,
    currency,
    setCurrency,
  };

  return (
    <Coincontext.Provider value={contextValue}>
      {props.children}
    </Coincontext.Provider>
  );
}

export default CoinContextProvider;
