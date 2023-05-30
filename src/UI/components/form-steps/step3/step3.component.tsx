import { FormContext } from "contexts/formContext";
import React, { useContext } from "react";
import { getLeagues } from "services";
import Step from "../generic-step/generic-step.component";
import { League } from "./step3.types";

const Step3: React.FC = () => {
  const { formData, saveStep } = useContext(FormContext);

  return (
    <Step<League>
      saveStep={saveStep}
      apiFunction={getLeagues}
      flagKey="flag"
      nameKey="name"
      countryName={formData.step1Data.name}
      apiParams={[]}
    />
  );
};

export default Step3;
