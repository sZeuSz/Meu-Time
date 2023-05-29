import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 350px;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border: 2px solid #ffffff;
  padding: 15px;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
  }

  div {
    @media (max-width: 372px) {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
  .pitch.small {
    max-width: 200px;
    height: 100px;

    @media (max-width: 372px) {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  width: 100%;
  height: auto;
  h3 {
    text-align: start;
    word-break: break-word;
    margin: 15px 0px;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;
export { Card, InfoWrapper };
