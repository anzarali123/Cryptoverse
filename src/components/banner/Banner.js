import { Container, makeStyles, Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";

function Banner() {
  return (
    <div style={{ background: "#312e81" }}>
      <Container
        sx={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          paddingTop: "25px",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
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
}

export default Banner;
