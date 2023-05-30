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
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const isMobileScreen: boolean = useMobileScreen();
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      <LimitContent>
        <LogoWrapper onClick={() => navigate("/")}>
          <Logo src={logo} />
          <h1>Meu Time</h1>
        </LogoWrapper>
        {!isMobileScreen && (
          <Navbar>
            <span onClick={() => navigate("/")}>Início</span>
            <span onClick={() => navigate("/contacts")}>Contato</span>
            <span onClick={() => navigate("/about")}>Sobre</span>
          </Navbar>
        )}
        {isMobileScreen && <MenuIcon />}
      </LimitContent>
    </ContainerHeader>
  );
};

export default Header;
