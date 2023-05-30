import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { getPlayers } from "services";
import styled from "styled-components";
import { LoadingSpinner } from "UI/components/load-spinner/load-spinner.styled";
import { PlayerStatistics } from "./players.types";

const Players: React.FC = React.memo(() => {
  const { userData } = useContext(UserContext);
  const { formData } = useContext(FormContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [players, setPlayers] = useState<PlayerStatistics[]>([]);

  const getData = useCallback(
    async (key: string, leagueId: string, seasonId: string, teamId: string) => {
      try {
        const response = await getPlayers(key, leagueId, seasonId, teamId);
        setPlayers(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    setLoading(true);
    if (
      userData?.api_key &&
      formData.step3Data.id &&
      formData.step2Data.name &&
      formData.step4Data.id
    ) {
      getData(
        userData.api_key,
        formData.step3Data.id,
        formData.step2Data.name,
        formData.step4Data.id
      );
    }
  }, [
    userData?.api_key,
    formData.step3Data.id,
    formData.step2Data.name,
    formData.step4Data.id,
    getData,
  ]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        players.map((objectPlayer: PlayerStatistics) => {
          const {
            player: { firstname, age, nationality, photo },
          } = objectPlayer;
          return (
            <Card>
              <Figure>
                <PlayerImg src={photo} alt={`foto de ${firstname}`} />
              </Figure>
              <InfoWrapper>
                <h3>
                  <span>Nome: </span>
                  {firstname}
                </h3>
                <h3>
                  <span>Idade: </span>
                  {age}
                </h3>
                <h3>
                  <span>Nac.: </span>
                  {nationality}
                </h3>
              </InfoWrapper>
            </Card>
          );
        })
      )}
    </>
  );
});

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
  width: 100%;

  h3 {
    text-align: start;
    word-break: break-word;
    margin: 15px 0px;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

export default Players;
