import React from "react";
import { render, waitFor } from "@testing-library/react";
import WaveEffect from "./wave-effect.component";
import { waves } from "data";

const setup = () => {
  return render(<WaveEffect />);
};
describe("WaveEffect Component", () => {
  it("renders the waves correctly", () => {
    const { container } = setup();
    waitFor(
      () => {
        const waveElements = container.querySelectorAll(".wave");
        expect(waveElements.length).toBe(waves.length);

        waveElements.forEach((waveElement, index) => {
          const wave = waves[index];
          expect(waveElement).toHaveStyle(`opacity: ${wave.opacity}`);
          expect(waveElement).toHaveStyle(
            `animation-duration: ${wave.animationduration}s`
          );
          expect(waveElement).toHaveStyle(
            `background-image: url(${wave.backgroundimage})`
          );
          expect(waveElement).toHaveStyle(
            `background-size: ${wave.backgroundsize}px`
          );
        });
      },
      { timeout: 5000 }
    );
  });
});
