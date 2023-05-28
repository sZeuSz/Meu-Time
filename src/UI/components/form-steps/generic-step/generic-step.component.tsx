import { defaultImage } from "assets";
import { FormContext } from "contexts/formContext";
import { UserContext } from "contexts/userContext";
import React, { useCallback, useContext, useEffect, useState } from "react";
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
};

function Step<T extends { [key: string]: string }>(
  props: StepWithDataProps<T>
) {
  const [data, setData] = useState<T[]>([]);
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { formData } = useContext(FormContext);

  const getData = useCallback(
    async (key: string) => {
      try {
        let response: T[];
        if (props.countryName) {
          response = await props.apiFunction(
            key,
            props.countryName,
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

  useEffect(() => {
    getData(userData?.api_key);
    window.scrollTo(0, 0); // Rolando para o topo da página
  }, [getData, userData?.api_key]);

  const handleSelect = (item: T) => {
    props.saveStep(formData.step, item);
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
            <CircleWrapper key={index} onClick={() => handleSelect(item)}>
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
