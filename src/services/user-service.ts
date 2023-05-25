import api from "./api";

const makeConfig = (key: string | unknown) => {
  return {
    headers: {
      "x-rapidapi-key": key ? `${key}` : undefined,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };
};
const signIn = async (key: string | unknown): Promise<any> => {
  try {
    const response = await api.get(`/status`, makeConfig(key));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter o usuário");
  }
};

export { signIn };
