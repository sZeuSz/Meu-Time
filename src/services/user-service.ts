import api from "./api";
import { makeConfig } from "./api.config";

const signIn = async (key: string | unknown): Promise<any> => {
  /*try {
    const response = await api.get(`/status`, makeConfig(key));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter o usuário");
  }*/
  return {
    get: "status",
    parameters: [],
    errors: [],
    results: 1,
    paging: {
      current: 1,
      total: 1,
    },
    response: {
      account: {
        firstname: "Zeno",
        lastname: "Silva",
        email: "rosenosilva20@gmail.com",
      },
      subscription: {
        plan: "Free",
        end: "2024-05-25T00:00:00+00:00",
        active: false,
      },
      requests: {
        current: 1,
        limit_day: 100,
      },
    },
  };
};

export { signIn };
