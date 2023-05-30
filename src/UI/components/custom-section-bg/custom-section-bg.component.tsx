import React, { ReactNode } from "react";
import { Section } from "./custom-section-bg.styled";

type SectionProps = {
  children: ReactNode;
};

const CustomSection: React.FC<SectionProps> = ({ children }) => {
  return <Section>{children}</Section>;
};

export default CustomSection;
