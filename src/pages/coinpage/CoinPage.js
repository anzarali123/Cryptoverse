import { LinearProgress, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../../components/coinInfo/CoinInfo";
import { SingleCoin } from "../../config/api";
import { CryptoState } from "../../context/CryptoContext";
import parse from "html-react-parser";
import { numberWithCommas } from "../../components/carousel/Carousel";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
  borderRight: "2px solid white",
}));

const Heading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "20px",
  fontFamily: "Montserrat",
});

const MarketData = styled(Box)(({ theme }) => ({
  alignSelf: "start",
  padding: "25px",
  paddingTop: "10px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-around",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "start",
  },
}));

const CoinPage = () => {
  const { id } = useParams();
  const { currency, symbol } = CryptoState();
  const [coin, setCoin] = useState();

  const fetchCoin = async () => {
    const response = await fetch(SingleCoin(id));
    const data = await response.json();
    setCoin(data);
  };
  useEffect(() => {
    fetchCoin();
  }, [currency]);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <Container>
      <Sidebar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200px"
          style={{ marginBottom: "20px" }}
        />
        <Heading variant="h3">{coin?.name}</Heading>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: "25px",
            paddingBottom: "15px",
            paddingTop: "0px",
            textAlign: "justify",
          }}
        >
          {parse(coin?.description.en)}.
        </Typography>
        <MarketData>
          <span style={{ display: "flex" }}>
            <Heading variant="h5">Rank:</Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Heading variant="h5">Current Price:</Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Heading variant="h5">Market Cap:</Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </MarketData>
      </Sidebar>
      {/* chart  */}
      <CoinInfo coin={coin} />
    </Container>
  );
};

export default CoinPage;
