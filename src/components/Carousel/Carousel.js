import { useEffect, useState } from "react";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../context/CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const carouselStyle = {
  height: "100%",
  display: "flex",
  alignItems: "center",
};
const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};
const carouselItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const { currency } = CryptoState();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    const {
      id,
      image,
      name,
      symbol,
      price_change_percentage_24h,
      current_price,
    } = coin;
    return (
      <Link style={carouselItem} to={`/coins/${id}`} key={id}>
        <img src={image} alt={name} height="80" style={{ marginBottom: 10 }} />
        <span>
          {symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}
          {numberWithCommas(current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const fetchTrendingCoins = async () => {
    const response = await fetch(TrendingCoins(currency));
    const data = await response.json();
    setTrending(data);
  };
  return (
    <div style={carouselStyle}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
