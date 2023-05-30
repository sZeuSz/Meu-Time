import { useLocalStorage } from "hooks";
import React, { useContext, useState } from "react";
import { signIn } from "services";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/userContext";
import {
  Box,
  Button,
  ErrorMessage,
  Heading,
  Input,
  LoginForm,
} from "./custom-box.styled";

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

export default CustomBox;
