import styled from "styled-components";
import { bgImage } from "assets";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-image: url(${bgImage});
  background-size: cover;
  z-index: 0;

  &::before {
    background-color: rgba(0, 0, 54, 0.8);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
`;

export { Section };
