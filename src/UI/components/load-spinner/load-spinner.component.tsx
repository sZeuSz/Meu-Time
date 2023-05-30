import React from "react";
import { LoadingSpinner, LoadingWrapper } from "./load-spinner.styled";

const LoadSpinner = () => {
  return (
    <LoadingWrapper data-testid="loading-spinner">
      <LoadingSpinner />
    </LoadingWrapper>
  );
};

export default LoadSpinner;
