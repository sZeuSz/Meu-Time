import React from "react";
import { logo } from "assets";
import {
  ContainerHeader,
  LimitContent,
  Logo,
  LogoWrapper,
  Navbar,
} from "./header.styled";
import { useMobileScreen } from "hooks";
import MenuIcon from "../menu-icon/menu-icon.component";
const Header: React.FC = () => {
  const isMobileScreen: boolean = useMobileScreen();
  return (
    <ContainerHeader>
      <LimitContent>
        <LogoWrapper>
          <Logo src={logo} />
          <h1>Meu Time</h1>
        </LogoWrapper>
        {!isMobileScreen && (
          <Navbar>
            <a href="http://localhost:3000">Início</a>
            <a href="http://localhost:3000">Contato</a>
            <a href="http://localhost:3000">Sobre</a>
          </Navbar>
        )}
        {isMobileScreen && <MenuIcon />}
      </LimitContent>
    </ContainerHeader>
  );
};

export default Header;
