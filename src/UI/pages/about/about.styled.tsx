import styled from "styled-components";

const SelectWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 201px);
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
    border: none;
  }
  @media (max-width: 280px) {
    height: 68%;
  }

  span {
    width: 80%;
    color: #fff;
    line-height: 30px;
    font-family: roboto;
  }
`;

export { SelectWrapper };
