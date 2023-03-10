import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import CoinPage from "./pages/coinpage/CoinPage";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
