import { defaultImage } from "assets";
import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadingSpinner,
  LoadingWrapper,
} from "UI/components/load-spinner/load-spinner.styled";
import { CircleWrapper } from "UI/components/shared-styled/circle-wrapper";

type StepProps<T> = {
  saveStep: (step: number, data: T) => void;
  apiFunction: (...args: any[]) => Promise<T[]>;
  apiParams: any[];
  flagKey: keyof T;
  nameKey: keyof T;
};

type StepWithDataProps<T> = StepProps<T> & {
  countryName?: string;
  leagueId?: string;
  seasonYear?: string;
};

function Step<T extends { [key: string]: string }>(
  props: StepWithDataProps<T>
) {
  const [data, setData] = useState<T[]>([]);
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();
  const getData = useCallback(
    async (key: string) => {
      try {
        let response: T[];
        if (props.countryName && props.seasonYear) {
          response = await props.apiFunction(
            key,
            props.countryName,
            props.seasonYear,
            ...props.apiParams
          );
        } else if (props.leagueId && props.seasonYear) {
          response = await props.apiFunction(
            key,
            props.leagueId,
            props.seasonYear,
            ...props.apiParams
          );
        } else {
          response = await props.apiFunction(key, ...props.apiParams);
        }
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [props]
  );

  useEffect(() => {
    getData(userData?.api_key);
  }, [getData, userData?.api_key]);

  const handleSelect = (item: T) => {
    props.saveStep(formData.step, item);

    if (formData.step === 4) {
      navigate("/team-statistics");
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      ) : (
        data?.map((item, index) => {
          return (
            <CircleWrapper
              data-testid="step-component"
              key={index}
              onClick={() => handleSelect(item)}
            >
              <img
                src={item[props.flagKey] || defaultImage}
                alt={item[props.nameKey]}
              />
              <span>{item[props.nameKey]}</span>
            </CircleWrapper>
          );
        })
      )}
    </>
  );
}

export default Step;
