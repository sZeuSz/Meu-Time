import React, { useContext, useState } from "react";
import { CustomSection, RouteStepContent, WaveEffect } from "UI/components";
import styled from "styled-components";
import { UserContext } from "contexts/userContext";
import { steps } from "data";
import { FormContext, FormProvider } from "contexts/formContext";

const Statistics: React.FC = () => {
  const { formData, setFormData, nextStep } = useContext(FormContext);
  const { userData } = useContext(UserContext);
  const { step } = formData;
  console.log("PAASSSOOO", step);
  return (
    <>
      <CustomSection>
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
      </CustomSection>

      <WaveEffect></WaveEffect>
      <button onClick={() => console.log(formData)}>MIM CLIQUE</button>
    </>
  );
};
const StepWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  h3 {
    width: 10px;
    text-align: start;
    color: #ffffff;
  }
  cursor: pointer;
`;
const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 200px;
  height: 420px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  border-radius: 12px;
`;
const Step = styled.div<{ active: boolean; last: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? "#ffffff" : "#c4c4c4")};

  ${({ last }) =>
    last
      ? ""
      : `&:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 40px;
          width: 2px;
          height: 40px;
          background-color: #c4c4c4;
          transform: translateX(-50%);
          z-index: 1;
        }`}
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: calc(100% - 70px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  border: solid 2px #ffffff;
`;
const Modal = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  height: 400px;
  z-index: 65;
  overflow-y: scroll;
  border-radius: 12px;
`;
const ButtonSelect = styled.button`
  width: 150px;
  height: 30px;
  background-color: gray;
  border-radius: 12px;
  z-index: 2;
`;

export default Statistics;
