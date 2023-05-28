import styled from "styled-components";

const CircleWrapper = styled.div`
  width: 125px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px #ffffff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  z-index: 1;
`;

export { CircleWrapper };
