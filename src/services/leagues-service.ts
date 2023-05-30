import api from "./api";
import { makeConfig } from "./api.config";

const getLeagues = async (
  key: string | unknown,
  countryName: string,
  seasonYear: number
): Promise<any> => {
  try {
    console.log(key, seasonYear, countryName);
    console.log(
      `/leagues?season=${seasonYear.toString()}&country=${countryName}`
    );
    const result = await api.get(
      `/leagues?season=${Number(seasonYear)}&country=${countryName}`,
      makeConfig(key)
    );
    console.log("service", result);
    const resultMap = result.data.response.map((item) => {
      return { ...item.league, name: item.league.name, flag: item.league.logo };
    });
    return resultMap;
  } catch (error) {
    throw new Error("Erro ao obter o usuário");
  }
};

export default getLeagues;
