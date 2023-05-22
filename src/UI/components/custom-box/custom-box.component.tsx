import React from "react";
import styled from "styled-components";
const CustomBox: React.FC = () => {
  return (
    <Box>
      <LoginForm>
        <Heading>
          JÁ PENSOU EM TER TODAS AS ESTATÍSTICAS DO FUTEBOL NA PALMA DA MÃO?
        </Heading>
        <Input type="text" placeholder="Insira sua key da API-Football" />
        <Button>Login</Button>
      </LoginForm>
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
  background: transparent;
`;

const LoginForm = styled.div`
  text-align: center;
  background-color: inherit;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  font-size: 35px;
  margin-bottom: 20px;
  line-height: 45px;
  color: #ffffec;

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 255px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 19px;
  border: 1px solid #55b1df;
  border: none;
  outline: none;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border-radius: 19px;

  &:hover {
    background-color: #0d8bf2;
  }
`;

export default CustomBox;
