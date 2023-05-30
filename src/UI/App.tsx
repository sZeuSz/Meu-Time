import React from "react";
import { GlobalStyled } from "styles";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contacts, Form, Home, TeamStatisticsSelect } from "./pages";
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
            <Route path="/form" element={<Form />} />
            <Route path="team-statistics" element={<TeamStatisticsSelect />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <GlobalStyled />
        </BrowserRouter>
      </FormProvider>
    </UserContextProvider>
  );
};

export default App;
