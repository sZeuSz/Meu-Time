import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;

  @media (max-width: 763px) {
    font-size: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectWrapper = styled.div<{ selectcontent: any }>`
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
    // width: 100%;
    border-radius: 0px;
    border: none;
  }
  @media (max-width: 280px) {
    height: 68%;
  }
`;

const ArrowIcon = styled(BsFillArrowLeftCircleFill)`
  display: block;
  width: 100px;
  height: 100px;
  font-size: 120px;
  color: #ffff;
  z-index: 3;

  &:hover {
    cursor: pointer;
    filter: brightness(50%);
  }
`;

export { Title, Container, SelectWrapper, ArrowIcon };
