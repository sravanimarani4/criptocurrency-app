import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Coincontext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

function Home() {
  const { allCoinsData, currency } = useContext(Coincontext);
  //   console.log(currency.name);
  const [displayAllCoins, setDisplayAllCoins] = useState([]);

  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayAllCoins(allCoinsData);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoinsData.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayAllCoins(coins);
  };

  useEffect(() => {
    setDisplayAllCoins(allCoinsData);
  }, [allCoinsData]);
  //   console.log(displayAllCoins);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace.Sign up to
          explore about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input
            list="coinslist"
            type="text"
            placeholder="Search crypto..."
            value={input}
            onChange={inputHandler}
            required
          />

          <datalist id="coinslist">
            {allCoinsData.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hrs Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayAllCoins.slice(0, 10).map((item, index) => (
          //   return
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + item.symbol}</p>
            </div>
            <p>
              {currency.symbol}
              {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
// cryptoApi:CG-JcEECBRfY8c2tweS1FdMti2Y

export default Home;
