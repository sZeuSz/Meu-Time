type StatsData = {
  total: number | null;
  percentage: string | null;
};

type Stats = {
  [key: string]: StatsData;
};

export { Stats, StatsData };
