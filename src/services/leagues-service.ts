import api from "./api";
import { makeConfig } from "./api.config";

const getLeagues = async (
  key: string | unknown,
  countryName: string
): Promise<any> => {
  try {
    const result = await api.get(`/leagues`, makeConfig(key));
    const resultFilter = result.data.response.filter(
      (item) => item.country.name === countryName
    );

    const resultMap = resultFilter.map((item) => {
      return { ...item.league, name: item.league.name, flag: item.league.logo };
    });
    return resultMap;
  } catch (error) {
    throw new Error("Erro ao obter o usuário");
  }
};

export default getLeagues;
