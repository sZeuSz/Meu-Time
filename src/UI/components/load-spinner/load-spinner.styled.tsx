import styled, { keyframes } from "styled-components";
import { FaCircleNotch } from "react-icons/fa";

const rotateEffect = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LoadingSpinner = styled(FaCircleNotch)`
  width: 60px;
  height: 60px;
  z-index: 5;
  color: white;
  animation: ${rotateEffect} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

export { LoadingSpinner, LoadingWrapper };
