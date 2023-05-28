import React from "react";
import { GlobalStyled } from "styles";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Statistics } from "./pages";
import { UserContextProvider } from "contexts/userContext";
import { FormProvider } from "contexts/formContext";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <FormProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
          <GlobalStyled />
        </BrowserRouter>
      </FormProvider>
    </UserContextProvider>
  );
};

export default App;
