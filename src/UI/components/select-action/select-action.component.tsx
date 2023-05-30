import React, { useContext, useState } from "react";
import CustomSection from "../custom-section-bg/custom-section-bg.component";
import { Modal, ModalWrapper } from "../shared-styled/modal";
import styled from "styled-components";
import { UserContext } from "contexts/userContext";
import { statisticsToSelect } from "data";
import { ButtonSelect } from "../shared-styled/button-select";
import { FormContext } from "contexts/formContext";
import Players from "../team-statistics/players/players.component";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Lineups from "../team-statistics/lineups/lineups.component";
import ResultTable from "../team-statistics/result-table/result-table.component";
import GraphGolsPerMinute from "../team-statistics/graphic-gols-per-minutes/graphic-gols-per-minutes.component";
import RouteSelectContent from "../route-select-statistic-fragment/route-select-statistic-fragment.component";
const SelectAction: React.FC = () => {
  const { userData } = useContext(UserContext);
  const { formData } = useContext(FormContext);
  const [selectContent, setSelectContent] = useState<number>(0);
  const [text, setText] =
    useState(`Olá, ${userData.account.firstname}. Agora que selecionou todas
                  as informações necessárias, escolha o que deseja ver do time
                  escolhido (${formData.step4Data.name})`);
  const handleSelectContent = (ButtonId: number) => {
    setSelectContent(ButtonId);
    setText(
      statisticsToSelect.filter((item) => item.id === ButtonId)?.[0].name
    );
  };

  return (
    <CustomSection>
      <Container>
        <SelectWrapper selectContent={selectContent}>
          <ModalWrapper>
            {selectContent && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "25px",
                  marginLeft: "5px",
                }}
              >
                <Title>{text}</Title>
                <ArrowIcon
                  onClick={() => {
                    setText(`Olá, ${userData.account.firstname}. Agora que selecionou todas
                  as informações necessárias, escolha o que deseja ver do time
                  escolhido (${formData.step4Data.name})`);
                    setSelectContent(null);
                  }}
                />
              </div>
            )}
            <Modal>
              <>
                {!selectContent && <Title>{text}</Title>}

                {!selectContent &&
                  statisticsToSelect.map((item, index) => {
                    return (
                      <ButtonSelect
                        onClick={() => handleSelectContent(item.id)}
                        key={index}
                      >
                        {item.name}
                      </ButtonSelect>
                    );
                  })}
                {selectContent && <RouteSelectContent id={selectContent} />}
              </>
            </Modal>
          </ModalWrapper>
        </SelectWrapper>
      </Container>
    </CustomSection>
  );
};

const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectWrapper = styled.div<{ selectContent: any }>`
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

export default SelectAction;
