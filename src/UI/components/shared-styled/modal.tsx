import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 1200px;
  height: calc(100vh - 201px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    width: 100vw;
    border-radius: 0px;
    border: none;
  }
  @media (max-width: 281px) {
    width: 100vw;
  }
  @media (max-width: 375px) {
  }
`;

const Modal = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  max-height: 400px;
  z-index: 65;
  overflow-y: scroll;
  border-radius: 12px;

  @media (max-width: 375px) {
    max-height: calc(100% - 20px);
    width: 100%;
  }
`;

export { ModalWrapper, Modal };
