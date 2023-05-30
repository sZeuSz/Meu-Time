type GoalStats = {
  total: number;
  percentage: string;
};

type GoalMinuteStats = {
  [key: string]: GoalStats;
};

type GoalTypeStats = {
  total: {
    home: number;
    away: number;
    total: number;
  };
  average: {
    home: string;
    away: string;
    total: string;
  };
  minute: GoalMinuteStats;
};

type FixtureStats = {
  for: GoalTypeStats;
  against: GoalTypeStats;
};

export { FixtureStats };
