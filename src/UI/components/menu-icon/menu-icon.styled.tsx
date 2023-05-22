import styled from "styled-components";

const MenuIconWrapper = styled.div<{ open: boolean }>`
  width: 40px;
  height: 30px;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
  margin-right: 10px;

  div {
    width: 100%;
    height: 4px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      top: 0;
      transform: ${({ open }) =>
        open ? "rotate(50deg) translate(12px, 3px)" : "none"};
    }

    &:nth-child(2) {
      top: 12px;
      opacity: ${({ open }) => (open ? 0 : 1)};
      display: ${({ open }) => (open ? "none" : "block")};
    }

    &:nth-child(3) {
      top: 24px;
      transform: ${({ open }) =>
        open ? "rotate(-50deg) translate(12px, -3px)" : "none"};
    }
  }
`;
const MobileNavbar = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 101px;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? "100vh" : "0px")};
  background-color: rgba(0, 8, 58, 1); /* Cor com 80% de opacidade */
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
`;

const MobileNavItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;

  font-size: 16px;
  font-weight: bold;
  padding: 5px 23px;
  -webkit-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  &:hover {
    color: #fafafa;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  padding: 30px;
`;
export { MenuIconWrapper, MobileNavItem, MobileNavbar };
