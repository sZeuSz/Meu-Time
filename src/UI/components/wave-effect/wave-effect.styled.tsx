import styled, { keyframes } from "styled-components";
import { WaveProps } from "./wave-effect.types";

const WaveKeyFrame = keyframes`
    0% {
    transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
    }
    100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
    }
`;

const WaveWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  margin-top: -120px;
  overflow: hidden;
`;

const Wave = styled.div<WaveProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 120px;
  background-repeat: repeat no-repeat;
  background-position: 200px bottom;
  transform-origin: center bottom;
  opacity: ${({ opacity }) => opacity};
  animation: ${WaveKeyFrame} ${({ animationDuration }) => animationDuration}s
    linear infinite;
  background-image: url("${({ backgroundImage }) => backgroundImage}");
  background-size: 50% ${({ backgroundSize }) => backgroundSize}px;
  z-index: 1;
`;

export { WaveKeyFrame, WaveWrapper, Wave };
