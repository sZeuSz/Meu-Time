import React from "react";
import { Table, TableCell, TableRow } from "./fixture-table.styled";

const FixtureTable: React.FC<any> = ({ fixtureStats }) => {
  const { played, wins, draws, loses } = fixtureStats;

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Casa</th>
          <th>Fora</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Jogadas</TableCell>
          <TableCell>{played?.home}</TableCell>
          <TableCell>{played?.away}</TableCell>
          <TableCell>{played?.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Vitórias</TableCell>
          <TableCell>{wins?.home}</TableCell>
          <TableCell>{wins?.away}</TableCell>
          <TableCell>{wins?.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Empates</TableCell>
          <TableCell>{draws?.home}</TableCell>
          <TableCell>{draws?.away}</TableCell>
          <TableCell>{draws?.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Derrotas</TableCell>
          <TableCell>{loses?.home}</TableCell>
          <TableCell>{loses?.away}</TableCell>
          <TableCell>{loses?.total}</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default FixtureTable;
