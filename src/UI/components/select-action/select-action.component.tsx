import React, { useContext, useState } from "react";
import CustomSection from "../custom-section-bg/custom-section-bg.component";
import { Modal, ModalWrapper } from "../shared-styled/modal";
import { UserContext } from "contexts/userContext";
import { statisticsToSelect } from "data";
import { ButtonSelect } from "../shared-styled/button-select";
import { FormContext } from "contexts/formContext";
import RouteSelectContent from "../route-select-statistic-fragment/route-select-statistic-fragment.component";

import {
  ArrowIcon,
  Container,
  SelectWrapper,
  Title,
} from "./select-action.styled";

const SelectAction: React.FC = () => {
  const { userData } = useContext(UserContext);
  const { formData } = useContext(FormContext);
  const [selectContent, setSelectContent] = useState<number | null>(null);
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
        <SelectWrapper selectcontent={selectContent}>
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

export default SelectAction;
