type Player = {
  number?: number;
};

type Squad = {
  [position: string]: Player[];
};

type Team = {
  color: string;
  squad: Squad;
};

const generateTeam = (formation: string): Team => {
  const team: Team = {
    color: "lightblue",
    squad: {
      cam: [],
      df: [],
      fw: [],
      gk: [],
    },
  };

  const positions = formation?.split("-");
  const positionsOrder = ["df", "fw", "cam", "gk"];

  positions?.forEach((count, index) => {
    const position = positionsOrder[index];
    const players: Player[] = Array(Number(count)).fill({});

    team.squad[position] = players;
  });

  return team;
};

export default generateTeam;
