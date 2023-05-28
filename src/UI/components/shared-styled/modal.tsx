import styled from "styled-components";

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

export { ModalWrapper, Modal };
