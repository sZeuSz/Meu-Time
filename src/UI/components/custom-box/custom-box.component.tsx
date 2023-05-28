import { useLocalStorage } from "hooks";
import React, { useContext, useState } from "react";
import { signIn } from "services";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/userContext";

const CustomBox: React.FC = () => {
  const { setUserData } = useContext(UserContext);
  const [, setUserDataLS] = useLocalStorage("userData");
  const navigate = useNavigate();
  const [state, setState] = useState({
    apiKey: "",
    error: "",
    isLoading: false,
  });

  const updateState = (property: string, value: string | boolean | number) => {
    setState((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const handleLogin = async () => {
    updateState("isLoading", true);

    try {
      if (state.apiKey) {
        const response = await signIn(state.apiKey);

        if (response?.errors?.token) {
          console.log(response?.errors?.token);
          updateState("error", "Não foi possível autenticar usando essa Key");
          updateState("isLoading", false);
          return;
        }

        console.log("logado com sucesso", response.response);
        response.response["api_key"] = state.apiKey;
        setUserData(response.response);
        setUserDataLS(response.response);
        console.log("salvo com sucesso no contexto", response.response);
        navigate("/form");
      } else {
        updateState("error", "Campo obrigatório!");
      }
      updateState("isLoading", false);
    } catch (error) {
      console.error(error);
      updateState("isLoading", false);
    }
  };
  return (
    <>
      <Box>
        <LoginForm>
          <Heading>
            JÁ PENSOU EM TER TODAS AS ESTATÍSTICAS DO FUTEBOL NA PALMA DA MÃO?
          </Heading>
          <Input
            disabled={state.isLoading}
            type="text"
            placeholder="Insira sua key da API-Football"
            value={state.apiKey}
            onChange={(event) => {
              updateState("error", "");
              updateState("apiKey", event.target.value);
            }}
            required
          />
          {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
          <Button onClick={() => handleLogin()}>
            {state.isLoading ? (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            ) : (
              "Login"
            )}
          </Button>
        </LoginForm>
      </Box>
    </>
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
  // margin-bottom: 10px;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 10px 0px;

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 13px;
  }
`;

export default CustomBox;
