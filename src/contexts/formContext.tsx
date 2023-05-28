import React, { useState } from "react";
import { createContext } from "react";
import { steps } from "data";
import { Country } from "UI/components/form-steps/step1/step1.types";
import { useNavigate } from "react-router-dom";

type FormData = {
  step1Data: any;
  step2Data: any;
  step3Data: any;
  step4Data: any;
  step: number;
  steps: any;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: (step: any) => void;
  saveStep: (step: any, data: any) => void;
};

type FormProviderProps = {
  children: React.ReactNode;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    step1Data: {},
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step: 1,
    steps,
  });

  const nextStep = (step: any) => {
    console.log("handlezando", step);
    setFormData({
      ...formData,
      step: steps.findIndex((stepS) => stepS.step === step) + 1,
    });

    steps.forEach((stepS) => {
      if (stepS.step === step) {
        stepS.active = true;
      } else {
        stepS.active = false;
      }
    });
  };

  const saveStep = (step: any, data: any) => {
    console.log("salvando dados do step e indo para o próximo step");

    setFormData({
      ...formData,
      [`step${step}Data`]: data,
      step: steps.findIndex((stepS) => stepS.step === step + 1) + 1 || 1,
    });
    if (step >= 4) {
      setFormData({
        ...formData,
        [`step${step}Data`]: data,
        step: 4,
      });
      return;
    }
    steps.forEach((stepS) => {
      if (stepS.step === step + 1) {
        stepS.active = true;
      } else {
        stepS.active = false;
      }
    });
  };
  const contextValue: FormContextType = {
    formData,
    setFormData,
    nextStep,
    saveStep,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export { FormContext, FormProvider };
