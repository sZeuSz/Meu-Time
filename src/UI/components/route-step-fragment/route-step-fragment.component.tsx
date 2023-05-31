import React from "react";
import { Step1, Step2, Step3, Step4 } from "../form-steps";
import { RouteStepContentProps } from "./route-step-fragment.types";

const RouteStepContent: React.FC<RouteStepContentProps> = ({ step }) => {
  switch (step) {
    case 1:
      return <Step1 data-testid="step1-component" />;
    case 2:
      return <Step2 data-testid="step2-component" />;
    case 3:
      return <Step3 data-testid="step3-component" />;
    case 4:
      return <Step4 data-testid="step4-component" />;
    default:
      return <></>;
  }
};

export default RouteStepContent;
