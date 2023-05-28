import React from "react";
import { Step1, Step2, Step3, Step4 } from "../form-steps";
import { RouteStepContentProps } from "./route-step-fragment.types";

const RouteStepContent: React.FC<RouteStepContentProps> = ({ step }) => {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    default:
      return <>Não reconheço esse passo, mestre</>;
  }
};

export default RouteStepContent;
