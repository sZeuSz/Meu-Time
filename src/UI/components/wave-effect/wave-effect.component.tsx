import { waves } from "data";
import React from "react";
import { Wave, WaveWrapper } from "./wave-effect.styled";

const WaveEffect: React.FC = () => {
  return (
    <WaveWrapper>
      {waves.map((wave) => (
        <Wave
          opacity={wave.opacity}
          animationDuration={wave.animationDuration}
          backgroundImage={wave.backgroundImage}
          backgroundSize={wave.backgroundSize}
        />
      ))}
    </WaveWrapper>
  );
};

export default WaveEffect;
