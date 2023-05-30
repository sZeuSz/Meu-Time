import styled from "styled-components";

const ContactsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  z-index: 1;
  color: #fff;
  font-family: roboto;
  text-align: center;
  h2 {
    font-size: 30px;
  }

  @media (max-width: 764px) {
    h2 {
      font-size: 20px;
    }
  }
`;

const ContactCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const ContactName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ContactEmail = styled.p`
  font-size: 14px;
  color: #fff;
`;

export { ContactsContainer, ContactCard, ContactEmail, ContactName };
