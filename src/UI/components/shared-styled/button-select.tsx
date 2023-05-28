import styled from "styled-components";

const ButtonSelect = styled.button`
  width: 300px;
  height: 45px;
  background-color: gray;
  border-radius: 12px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    filter: brightness(80%);
  }
`;

export { ButtonSelect };
