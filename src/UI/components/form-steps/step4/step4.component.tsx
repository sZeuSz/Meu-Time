import { FormContext } from "contexts/formContext";
import React, { useContext } from "react";
import { getTeams } from "services";
import Step from "../generic-step/generic-step.component";
import { Teams } from "./step4.types";

const Step4: React.FC = () => {
  const { formData, saveStep } = useContext(FormContext);
  return (
    <Step<Teams>
      saveStep={saveStep}
      apiFunction={getTeams}
      flagKey="flag"
      nameKey="name"
      leagueId={formData.step3Data.id}
      seasonYear={formData.step2Data.name}
      apiParams={[]}
    />
  );
};

export default Step4;
