import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { getTeamsStatistics } from "services";
import styled from "styled-components";
import { LoadingSpinner } from "UI/components/load-spinner/load-spinner.styled";
import { Linup } from "./lineups.types";
import SoccerLineUp from "react-soccer-lineup";
import { generateTeam } from "helpers";
import { useMobileScreen } from "hooks";
import { Card, InfoWrapper } from "./lineups.styled";

const Lineups: React.FC = React.memo(() => {
  const { userData } = useContext(UserContext);
  const { formData } = useContext(FormContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [lineups, setLineups] = useState<Linup[]>([]);
  const isMobileScreen: boolean = useMobileScreen(372);
  const getData = useCallback(
    async (key: string, leagueId: string, seasonId: string, teamId: string) => {
      try {
        const response = await getTeamsStatistics(
          key,
          leagueId,
          seasonId,
          teamId,
          "lineups"
        );
        setLineups(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
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
  console.log(lineups);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Card>
          <div>
            <SoccerLineUp
              size={isMobileScreen ? "responsive" : "small"}
              pattern={"lines"}
              homeTeam={generateTeam(lineups?.[0]?.formation)}
            />
          </div>
          <InfoWrapper>
            <h3>Formação: {lineups?.[0]?.formation}</h3>
            <h3>Utilizada: {lineups?.[0]?.played} vezes.</h3>
          </InfoWrapper>
        </Card>
      )}
    </>
  );
});

export default Lineups;
