import styled from "styled-components";

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

  @media (max-width: 764px) {
    width: 85%;
  }
`;

const LoginForm = styled.div`
  text-align: center;
  background-color: inherit;
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
  width: 90%;
  max-width: 255px;
  padding: 10px;
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

export { Box, LoginForm, Heading, Input, Button, ErrorMessage };
