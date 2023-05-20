import React from "react";
import styled from "styled-components";
const CustomBox: React.FC = () => {
  return (
    <Box>
      <h4>Já pensou em todas as estatística do seu time favorito na mão?</h4>
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #08d565;
  text-transform: uppercase;
  text-align: center;
  //   margin-bottom: 18px;
  //   background-color: blue;
`;

export default CustomBox;
