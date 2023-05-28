import api from "./api";
import { makeConfig } from "./api.config";

const getSeasons = async (key: string | unknown): Promise<any> => {
  /*try {
    const response = await api.get(`/seasons`, makeConfig(key));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter as temporadas");
  }*/
  const result = {
    get: "leagues/seasons",
    parameters: [],
    errors: [],
    results: 18,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023, 2024, 2025,
    ],
  };
  return result.response.map((item) => {
    return { name: item, flag: "none" };
  });
};

export default getSeasons;
