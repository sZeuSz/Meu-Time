import api from "./api";
import { makeConfig } from "./api.config";

const getLeagues = async (
  key: string | unknown,
  countryName: string,
  seasonYear: number
): Promise<any> => {
  try {
    console.log(seasonYear, countryName);
    const result = await api.get(
      `/leagues?season=${Number(seasonYear)}&country=${countryName}`,
      makeConfig(key)
    );
    const resultMap = result.data.response.map((item) => {
      return { ...item.league, name: item.league.name, flag: item.league.logo };
    });
    console.log(result);
    console.log(resultMap);
    return resultMap;
  } catch (error) {
    throw new Error("Erro ao obter o usuário");
  }
};

export default getLeagues;
