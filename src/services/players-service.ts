import api from "./api";
import { makeConfig } from "./api.config";

const getPlayers = async (
  key: string | unknown,
  leagueId: string,
  seasonId: string,
  teamId: string
): Promise<any> => {
  try {
    const response = await api.get(
      `/players?league=${leagueId}&season=${seasonId}&team=${teamId}`,
      makeConfig(key)
    );
    console.log(response);
    return response.data.response;
  } catch (error) {
    throw new Error("Erro ao obter a lista de players");
  }
};

export default getPlayers;
