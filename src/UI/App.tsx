import React from "react";
import { GlobalStyled } from "styles";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Statistics } from "./pages";
import { UserContextProvider } from "contexts/userContext";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <GlobalStyled />
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
