const makeConfig = (key: string | unknown) => {
  return {
    headers: {
      "x-rapidapi-key": key ? `${key}` : undefined,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };
};

export { makeConfig };
