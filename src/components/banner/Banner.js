import { Typography } from "@mui/material";
import { Container, textTransform } from "@mui/system";
import Carousel from "../Carousel/Carousel";

const banner = {
  background: "#312e81",
};

const bannerContent = {
  height: "400px",
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  justifyContent: "space-around",
};
const Banner = () => {
  return (
    <div style={banner}>
      <Container sx={bannerContent}>
        <div
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              fontFamily: "Montserrat",
            }}
          >
            Cryptoverse
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
