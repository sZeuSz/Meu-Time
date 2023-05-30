import styled from "styled-components";

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

export { Table, TableCell, TableRow };
