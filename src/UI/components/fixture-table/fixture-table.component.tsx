import React from "react";
import styled from "styled-components";

const FixtureTable = ({ fixtureStats }) => {
  const { played, wins, draws, loses } = fixtureStats;

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Home</th>
          <th>Away</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Played</TableCell>
          <TableCell>{played?.home}</TableCell>
          <TableCell>{played?.away}</TableCell>
          <TableCell>{played?.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Wins</TableCell>
          <TableCell>{wins?.home}</TableCell>
          <TableCell>{wins?.away}</TableCell>
          <TableCell>{wins?.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Draws</TableCell>
          <TableCell>{draws?.home}</TableCell>
          <TableCell>{draws?.away}</TableCell>
          <TableCell>{draws?.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Loses</TableCell>
          <TableCell>{loses?.home}</TableCell>
          <TableCell>{loses?.away}</TableCell>
          <TableCell>{loses?.total}</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border: 1px solid #fff;
  font-family: roboto;
  th {
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: black;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export default FixtureTable;
