import api from "./api";
import { makeConfig } from "./api.config";

const getTeams = async (
  key: string | unknown,
  leagueId: string,
  seasonYear: string
): Promise<any> => {
  try {
    const result = await api.get(
      `/teams?league=${leagueId}&season=${seasonYear}`,
      makeConfig(key)
    );

    const resultMap = result.data.response.map((item) => {
      return { ...item.team, flag: item.team.logo };
    });
    return resultMap;
  } catch (error) {
    throw new Error("Erro ao obter os times");
  }
};

export default getTeams;
