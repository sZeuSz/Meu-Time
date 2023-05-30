import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { getPlayers } from "services";
import { LoadingSpinner } from "UI/components/load-spinner/load-spinner.styled";
import { Card, Figure, InfoWrapper, PlayerImg } from "./players.styled";
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
      ) : players.length === 0 ? (
        <h3 style={{ fontSize: "40px", color: "#ffffff" }}>
          Não há dados, desculpe '_'
        </h3>
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

export default Players;
