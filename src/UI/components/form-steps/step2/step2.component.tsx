import { FormContext } from "contexts/formContext";
import React, { useContext } from "react";
import { getSeasons } from "services";
import Step from "../generic-step/generic-step.component";
import { Season } from "./step2.types";

const Step3: React.FC = () => {
  const { saveStep } = useContext(FormContext);
  return (
    <Step<Season>
      saveStep={saveStep}
      apiFunction={getSeasons}
      flagKey={null}
      nameKey="name"
      apiParams={[]}
    />
  );
};

export default Step3;
