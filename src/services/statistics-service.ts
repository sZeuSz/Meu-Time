import api from "./api";
import { makeConfig } from "./api.config";

const getTeamsStatistics = async (
  key: string | unknown,
  leagueId: string,
  seasonYear: string,
  teamId: string,
  field: string
): Promise<any> => {
  try {
    const result = await api.get(
      `/teams/statistics?league=${leagueId}&season=${seasonYear}&team=${teamId}`,
      makeConfig(key)
    );
    return result.data.response[field];
  } catch (error) {
    throw new Error("Erro ao obter os times");
  }
};

export default getTeamsStatistics;
