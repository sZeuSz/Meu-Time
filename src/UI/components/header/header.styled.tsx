import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const MenuIcon = styled(AiOutlineMenu)`
  color: #ffffec;
  font-size: 15px;
`;

const ContainerHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: #000036;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const LimitContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const Navbar = styled.nav`
  width: 300px;
  span {
    text-decoration: none;

    color: #fff;
    font-family: "Roboto", sans-serif;

    font-size: 16px;
    font-weight: bold;
    padding: 5px 23px;
    -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    &:hover {
      color: #fafafa;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
export { ContainerHeader, LimitContent, Logo, LogoWrapper, Navbar, MenuIcon };
