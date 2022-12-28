import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../context/CryptoContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              width={50}
              height={50}
              src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
              alt="Logo"
            />
            <Typography
              onClick={() => navigate("/")}
              sx={{
                flex: 1,
                fontSize: "30px",
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              CryptoVerse
            </Typography>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              variant="outlined"
              sx={{ width: 100, height: 40, marginLeft: 15 }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
