import React from "react";
import { logo } from "assets";
import {
  ContainerHeader,
  LimitContent,
  Logo,
  LogoWrapper,
  Navbar,
} from "./header.styled";

const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <LimitContent>
        <LogoWrapper>
          <Logo src={logo} />
          <h1>Meu Time</h1>
        </LogoWrapper>
        <Navbar>
          <a href="http://localhost:3000">Início</a>
          <a href="http://localhost:3000">Contact</a>
          <a href="http://localhost:3000">About</a>
        </Navbar>
      </LimitContent>
    </ContainerHeader>
  );
};

export default Header;
