import React, { useContext } from "react";
import {
  ContainerDFC,
  CustomSection,
  Modal,
  ModalWrapper,
  RouteStepContent,
  WaveEffect,
} from "UI/components";
import { steps } from "data";
import { FormContext } from "contexts/formContext";
import { ProgressStep, SelectWrapper, Step, StepWrapper } from "./form.styled";

const Form: React.FC = () => {
  const { formData, nextStep } = useContext(FormContext);
  const { step } = formData;
  return (
    <>
      <CustomSection>
        <ContainerDFC>
          <SelectWrapper>
            {step && (
              <ModalWrapper>
                <ProgressStep>
                  {steps.map((step, index) => {
                    return (
                      <StepWrapper
                        key={index}
                        onClick={() => nextStep(step.step)}
                      >
                        <Step
                          active={step.active}
                          last={index === steps.length - 1}
                        >
                          {step.step}
                        </Step>
                        <h3>{step.name}</h3>
                      </StepWrapper>
                    );
                  })}
                </ProgressStep>
                <Modal>
                  <RouteStepContent step={step} />
                </Modal>
              </ModalWrapper>
            )}
          </SelectWrapper>
        </ContainerDFC>
      </CustomSection>
      <WaveEffect></WaveEffect>
    </>
  );
};

export default Form;
