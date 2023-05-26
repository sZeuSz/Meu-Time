import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { CustomBox, CustomSection, WaveEffect } from "UI/components";
import styled from "styled-components";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getCountries } from "services";
import { UserContext } from "contexts/userContext";
type Country = {
  name: string;
  code: string;
  flag: string;
};
const Statistics: React.FC = () => {
  const [step, setStep] = useState<boolean>(false);
  const { userData } = useContext(UserContext);
  const handleSelectStep = () => {
    setStep(true);
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const navigate: NavigateFunction = useNavigate();

  const getAllCountries = useCallback(async (key: string) => {
    try {
      const response = await getCountries(key);
      setCountries(response.response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllCountries(userData?.api_key);
  }, [getAllCountries, userData?.api_key]);
  return (
    <>
      <CustomSection>
        <SelectWrapper>
          {step && isLoading
            ? "Loading"
            : step && (
                <ModalWrapper>
                  <ProgressStep>
                    <Step active={true}>{1}</Step>
                    <Step active={true}>{3}</Step>
                    <Step active={true}>{4}</Step>
                    <Step active={true}>{5}</Step>
                    <Step active={true}>{6}</Step>
                  </ProgressStep>
                  <Modal>
                    {countries.map((country, index) => {
                      return (
                        <CountryWrapper key={index}>
                          <img src={country.flag} alt={country.name} />
                          <span>{country.name}</span>
                        </CountryWrapper>
                      );
                    })}
                  </Modal>
                </ModalWrapper>
              )}
          {!step && (
            <ButtonSelect onClick={handleSelectStep}>
              Selecione um país
            </ButtonSelect>
          )}
        </SelectWrapper>
      </CustomSection>
      <WaveEffect></WaveEffect>
    </>
  );
};
const ProgressWrapper = styled.div``;
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
const Step = styled.div<{ active: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? "#ffffff" : "#c4c4c4")};

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 40px;
    width: 2px;
    height: 40px;
    background-color: #c4c4c4;
    transform: translateX(-50%);
    z-index: 1;
  }
`;
const CountryWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px #ffffff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
  img {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  z-index: 1;
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
