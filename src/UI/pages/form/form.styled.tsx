import styled from "styled-components";

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
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 201px);
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
    border: none;
  }
  @media (max-width: 280px) {
    height: 68%;
  }
`;

export { StepWrapper, ProgressStep, Step, SelectWrapper };
