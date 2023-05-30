import React from "react";
import {
  ContainerDFC,
  CustomSection,
  Modal,
  ModalWrapper,
  WaveEffect,
} from "UI/components";
import { SelectWrapper } from "../about/about.styled";
import {
  ContactCard,
  ContactEmail,
  ContactName,
  ContactsContainer,
} from "./contacts.styled";
import { ContactInfo } from "./contacts.types";

const Contacts: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      name: "Roseno Silva",
      email: "rosenosilva20@gmail.com",
    },
  ];

  return (
    <>
      <CustomSection>
        <ContainerDFC>
          <SelectWrapper>
            <ModalWrapper>
              <Modal>
                <ContactsContainer>
                  <h2>Informações de Contato</h2>
                  {contactInfo.map((contact, index) => (
                    <ContactCard key={index}>
                      <img
                        src="https://avatars.githubusercontent.com/u/70597064?s=400&u=d01b9c83653166111660dd29593ca14f936cb631&v=4"
                        alt="imagem de Roseno Silva"
                      />
                      <ContactName>{contact.name}</ContactName>
                      <ContactEmail>Email: {contact.email}</ContactEmail>
                    </ContactCard>
                  ))}
                </ContactsContainer>
              </Modal>
            </ModalWrapper>
          </SelectWrapper>
        </ContainerDFC>
      </CustomSection>
      <WaveEffect />
    </>
  );
};

export default Contacts;
