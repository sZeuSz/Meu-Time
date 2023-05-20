import React from "react";
import CustomBox from "../custom-box/custom-box.component";
import { Section } from "./custom-section-bg.styled";

const CustomSection: React.FC = () => {
  return (
    <Section>
      <CustomBox></CustomBox>
    </Section>
  );
};

export default CustomSection;
