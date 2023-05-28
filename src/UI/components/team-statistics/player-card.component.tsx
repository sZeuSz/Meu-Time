import React from "react";
import styled from "styled-components";
const PlayerCard: React.FC = () => {
  return (
    <Card>
      <Figure>
        <PlayerImg
          src="https://media-3.api-sports.io/football/players/883.png"
          alt="playernanana"
        />
      </Figure>
      <InfoWrapper>
        <h3>
          <span>Nome: </span>Roseno Silva da Silva scs cscs
        </h3>
        <h3>
          <span>Idade: </span>39
        </h3>
        <h3>
          <span>Nac.: </span>England
        </h3>
      </InfoWrapper>
    </Card>
  );
};

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
  }
`;
const Figure = styled.figure`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: auto;
  }
`;
const PlayerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;

  h3 {
    text-align: start;
    word-break: break-word;
    margin: 15px 0px;
  }
`;

export default PlayerCard;
