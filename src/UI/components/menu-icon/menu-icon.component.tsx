import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuIconWrapper,
  MobileNavbar,
  MobileNavItem,
} from "./menu-icon.styled";

function MenuIcon(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIconWrapper
        data-testid="menu-icon"
        open={isOpen}
        onClick={handleClick}
      >
        <div />
        <div />
        <div />
      </MenuIconWrapper>
      <MobileNavbar open={isOpen}>
        <MobileNavItem
          onClick={() => {
            handleClick();
            navigate("/");
          }}
        >
          Início
        </MobileNavItem>
        <MobileNavItem
          onClick={() => {
            handleClick();
            navigate("/contacts");
          }}
        >
          Contato
        </MobileNavItem>
        <MobileNavItem
          onClick={() => {
            handleClick();
            navigate("/about");
          }}
        >
          Sobre
        </MobileNavItem>
      </MobileNavbar>
    </>
  );
}

export default MenuIcon;
