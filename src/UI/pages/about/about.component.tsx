import React from "react";
import {
  ContainerDFC,
  CustomSection,
  Modal,
  ModalWrapper,
  WaveEffect,
} from "UI/components";
import { SelectWrapper } from "./about.styled";
const About: React.FC = () => {
  return (
    <>
      <CustomSection>
        <ContainerDFC>
          <SelectWrapper>
            <ModalWrapper>
              <Modal>
                <span>
                  <p>
                    Bem-vindo ao Meu Time! Apaixonado por futebol e tecnologia,
                    o Jośe Gustavo me contratou para desenvolver esta incrível
                    aplicação web para você explorar as estatísticas do seu time
                    favorito. Utilizando a poderosa API-fotball, que reúne
                    informações sobre ligas e copas ao redor do mundo, Meu Time
                    oferece uma experiência única para os fãs do esporte mais
                    popular do planeta.
                  </p>
                  <p>
                    Com Meu Time, você tem o controle total para personalizar
                    sua busca. Escolha o país, a temporada, a liga e o time que
                    deseja explorar, e deixe a magia acontecer. Descubra
                    estatísticas detalhadas, resultados de partidas, tabelas de
                    classificação e muito mais. Seja para acompanhar seu clube
                    de coração, para pesquisar sobre outros times ou para
                    mergulhar nas estatísticas de uma competição específica, Meu
                    Time é o seu companheiro perfeito.
                  </p>
                  <p>
                    Além disso, Meu Time é constantemente atualizado com as
                    últimas informações, para que você esteja sempre atualizado
                    com os resultados e estatísticas mais recentes. Acompanhe os
                    principais torneios, confira os números dos artilheiros,
                    analise o desempenho dos times em campo e fique por dentro
                    de tudo que acontece no mundo do futebol.
                  </p>
                  <p>
                    Prepare-se para mergulhar em um universo de informações e
                    descobertas fascinantes sobre o seu time e outras equipes ao
                    redor do mundo. Com Meu Time, a paixão pelo futebol e a
                    tecnologia se unem em uma experiência única e envolvente.
                  </p>
                </span>
              </Modal>
            </ModalWrapper>
          </SelectWrapper>
        </ContainerDFC>
      </CustomSection>
      <WaveEffect />
    </>
  );
};

export default About;
