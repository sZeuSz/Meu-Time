import { waves } from "data";
import React from "react";
import { Wave, WaveWrapper } from "./wave-effect.styled";

const WaveEffect: React.FC = () => {
  return (
    <WaveWrapper>
      {waves.map((wave, index) => (
        <Wave
          className="wave"
          key={index}
          opacity={wave.opacity}
          animationduration={wave.animationduration}
          backgroundimage={wave.backgroundimage}
          backgroundsize={wave.backgroundsize}
        />
      ))}
    </WaveWrapper>
  );
};

export default WaveEffect;
