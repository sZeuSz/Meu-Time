import React, { useContext, useState } from "react";
import CustomSection from "../custom-section-bg/custom-section-bg.component";
import { Modal, ModalWrapper } from "../shared-styled/modal";
import styled from "styled-components";
import { UserContext } from "contexts/userContext";
import { statisticsToSelect } from "data";
import { ButtonSelect } from "../shared-styled/button-select";
import { FormContext } from "contexts/formContext";
import Players from "../team-statistics/players/players";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const SelectAction: React.FC = () => {
  const { userData } = useContext(UserContext);
  const { formData } = useContext(FormContext);
  const [selectContent, setSelectContent] = useState<any>();
  const [text, setText] =
    useState(`Olá, ${userData.account.firstname}. Agora que selecionou todas
                  as informações necessárias, escolha o que deseja ver do time
                  escolhido (${formData.step4Data.name})`);
  const handleSelectContent = (ButtonId: Number) => {
    setSelectContent(<Players />);
    setText(
      statisticsToSelect.filter((item) => item.id === ButtonId)?.[0].name
    );
  };

  return (
    <CustomSection>
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
              {selectContent}
            </>
          </Modal>
        </ModalWrapper>
      </SelectWrapper>
    </CustomSection>
  );
};

const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
`;

const SelectWrapper = styled.div<{ selectContent: any }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled(BsFillArrowLeftCircleFill)`
  display: block;
  width: 100px;
  height: 100px;
  font-size: 120px;
  color: #ffff;
  z-index: 3;
`;

export default SelectAction;
