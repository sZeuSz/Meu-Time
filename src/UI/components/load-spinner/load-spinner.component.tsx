import React from "react";
import { LoadingSpinner, LoadingWrapper } from "./load-spinner.styled";

const LoadSpinner = () => {
  return (
    <LoadingWrapper>
      <LoadingSpinner />
    </LoadingWrapper>
  );
};

export default LoadSpinner;
