import api from "./api";
import { makeConfig } from "./api.config";

const signIn = async (key: string | unknown): Promise<any> => {
  try {
    const response = await api.get(`/status`, makeConfig(key));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter o usuário");
  }
};

export { signIn };
