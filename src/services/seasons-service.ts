import api from "./api";
import { makeConfig } from "./api.config";

const getSeasons = async (key: string | unknown): Promise<any> => {
  try {
    const response = await api.get(`/leagues/seasons`, makeConfig(key));
    return response.data.response.map((item) => {
      return { name: item, flag: "none" };
    });
  } catch (error) {
    throw new Error("Erro ao obter as temporadas");
  }
};

export default getSeasons;
