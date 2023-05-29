import api from "./api";
import { makeConfig } from "./api.config";

const getTeamsStatistics = async (
  key: string | unknown,
  leagueId: string,
  seasonYear: string,
  teamId: string,
  field: string
): Promise<any> => {
  /*try {
    const response = await api.get(`/teams/statistics?league=${leagueId}&season=${seasonYear}&team=${teamId}`, makeConfig(key));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter os times");
  }*/
  const result = {
    get: "teams/statistics",
    parameters: {
      league: "39",
      season: "2021",
      team: "33",
    },
    errors: [],
    results: 11,
    paging: {
      current: 1,
      total: 1,
    },
    response: {
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-1.api-sports.io/football/leagues/39.png",
        flag: "https://media-2.api-sports.io/flags/gb.svg",
        season: 2021,
      },
      team: {
        id: 33,
        name: "Manchester United",
        logo: "https://media-1.api-sports.io/football/teams/33.png",
      },
      form: "WDWWWLDLLWLLDWWWDWLDWWDDWWDLWDLWLLDWLL",
      fixtures: {
        played: {
          home: 19,
          away: 19,
          total: 38,
        },
        wins: {
          home: 10,
          away: 6,
          total: 16,
        },
        draws: {
          home: 5,
          away: 5,
          total: 10,
        },
        loses: {
          home: 4,
          away: 8,
          total: 12,
        },
      },
      goals: {
        for: {
          total: {
            home: 32,
            away: 25,
            total: 57,
          },
          average: {
            home: "1.7",
            away: "1.3",
            total: "1.5",
          },
          minute: {
            "0-15": {
              total: 6,
              percentage: "10.17%",
            },
            "16-30": {
              total: 6,
              percentage: "10.17%",
            },
            "31-45": {
              total: 9,
              percentage: "15.25%",
            },
            "46-60": {
              total: 11,
              percentage: "18.64%",
            },
            "61-75": {
              total: 14,
              percentage: "23.73%",
            },
            "76-90": {
              total: 10,
              percentage: "16.95%",
            },
            "91-105": {
              total: 3,
              percentage: "5.08%",
            },
            "106-120": {
              total: null,
              percentage: null,
            },
          },
        },
        against: {
          total: {
            home: 22,
            away: 35,
            total: 57,
          },
          average: {
            home: "1.2",
            away: "1.8",
            total: "1.5",
          },
          minute: {
            "0-15": {
              total: 8,
              percentage: "14.55%",
            },
            "16-30": {
              total: 6,
              percentage: "10.91%",
            },
            "31-45": {
              total: 8,
              percentage: "14.55%",
            },
            "46-60": {
              total: 15,
              percentage: "27.27%",
            },
            "61-75": {
              total: 6,
              percentage: "10.91%",
            },
            "76-90": {
              total: 8,
              percentage: "14.55%",
            },
            "91-105": {
              total: 4,
              percentage: "7.27%",
            },
            "106-120": {
              total: null,
              percentage: null,
            },
          },
        },
      },
      biggest: {
        streak: {
          wins: 3,
          draws: 2,
          loses: 2,
        },
        wins: {
          home: "5-1",
          away: "0-3",
        },
        loses: {
          home: "0-5",
          away: "4-0",
        },
        goals: {
          for: {
            home: 5,
            away: 4,
          },
          against: {
            home: 5,
            away: 4,
          },
        },
      },
      clean_sheet: {
        home: 5,
        away: 3,
        total: 8,
      },
      failed_to_score: {
        home: 5,
        away: 4,
        total: 9,
      },
      penalty: {
        scored: {
          total: 3,
          percentage: "100.00%",
        },
        missed: {
          total: 0,
          percentage: "0%",
        },
        total: 3,
      },
      lineups: [
        {
          formation: "4-2-3-1",
          played: 27,
        },
        {
          formation: "4-2-2-2",
          played: 5,
        },
        {
          formation: "3-5-2",
          played: 2,
        },
        {
          formation: "4-3-3",
          played: 2,
        },
        {
          formation: "4-3-1-2",
          played: 1,
        },
        {
          formation: "3-4-2-1",
          played: 1,
        },
      ],
      cards: {
        yellow: {
          "0-15": {
            total: 1,
            percentage: "1.30%",
          },
          "16-30": {
            total: 5,
            percentage: "6.49%",
          },
          "31-45": {
            total: 11,
            percentage: "14.29%",
          },
          "46-60": {
            total: 20,
            percentage: "25.97%",
          },
          "61-75": {
            total: 9,
            percentage: "11.69%",
          },
          "76-90": {
            total: 22,
            percentage: "28.57%",
          },
          "91-105": {
            total: 9,
            percentage: "11.69%",
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
        red: {
          "0-15": {
            total: null,
            percentage: null,
          },
          "16-30": {
            total: null,
            percentage: null,
          },
          "31-45": {
            total: null,
            percentage: null,
          },
          "46-60": {
            total: 1,
            percentage: "50.00%",
          },
          "61-75": {
            total: 1,
            percentage: "50.00%",
          },
          "76-90": {
            total: null,
            percentage: null,
          },
          "91-105": {
            total: null,
            percentage: null,
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
      },
    },
  };

  return result.response[field];
};

export default getTeamsStatistics;
