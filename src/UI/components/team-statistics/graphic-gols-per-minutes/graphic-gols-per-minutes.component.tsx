import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { getTeamsStatistics } from "services";
import { LoadingSpinner } from "UI/components/load-spinner/load-spinner.styled";
import { Card, InfoWrapper } from "./graphic-gols-per-minutes.styled";
import { FixtureStats } from "./graphic-gols-per-minutes.types";
import Graph from "UI/components/graph/graph.component";

const GraphGolsPerMinute: React.FC = React.memo(() => {
  const { userData } = useContext(UserContext);
  const { formData } = useContext(FormContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<FixtureStats>();

  const getData = useCallback(
    async (key: string, leagueId: string, seasonId: string, teamId: string) => {
      try {
        const response = await getTeamsStatistics(
          key,
          leagueId,
          seasonId,
          teamId,
          "goals"
        );
        setData(response);
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
        <Card>
          <InfoWrapper>
            <Graph stats={data.for.minute} />
          </InfoWrapper>
        </Card>
      )}
    </>
  );
});

export default GraphGolsPerMinute;
