import api from "./api";
import { makeConfig } from "./api.config";

const getCountries = async (key: string | unknown): Promise<any> => {
  try {
    const response = await api.get(`/countries`, makeConfig(key));
    return response.data.response;
  } catch (error) {
    throw new Error("Erro ao obter a lista de países");
  }
};

export default getCountries;
