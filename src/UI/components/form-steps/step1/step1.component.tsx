import { FormContext } from "contexts/formContext";
import React, { useContext } from "react";
import { getCountries } from "services";
import Step from "../generic-step/generic-step.component";
import { Country } from "./step1.types";

const Step1: React.FC = () => {
  const { saveStep } = useContext(FormContext);
  return (
    <Step<Country>
      saveStep={saveStep}
      apiFunction={getCountries}
      flagKey="flag"
      nameKey="name"
      apiParams={[]}
    />
  );
};

export default Step1;
