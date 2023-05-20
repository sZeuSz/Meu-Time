import React from "react";
import { GlobalStyled } from "styles";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <GlobalStyled />
    </BrowserRouter>
  );
};

export default App;
