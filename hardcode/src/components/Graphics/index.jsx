import Slide from "../Slide";
import { SwiperSlide } from "swiper/react";
import {
  Column,
  ColumnToRow,
  DefaultDiv,
  DefaultImg,
  ThemeH4,
  ThemeH3,
  ThemeSpan,
} from "../styles/Globals";
import graphic01 from "../../assets/graphic01.png";
import graphic02 from "../../assets/graphic02.png";
import graphic03 from "../../assets/graphic03.png";

import { Bar } from "./styles";

const Graphics = () => {
  return (
    <DefaultDiv bg="black">
      <Slide>
        <SwiperSlide>
          <Column justify="space-between">
            <ThemeH3 color="white">VOLUME DE INVESTIMENTO POR ESTÁGIO</ThemeH3>
            <ThemeH4 color="white">Aplicados em startups no Brasil</ThemeH4>
          </Column>
          <ColumnToRow>
            <Column lgw="80%" justify="flex-start" gap="15px">
              <ThemeSpan color="white">
                Quando destrinchamos os investimentos do ano por estágio,
                entendeoms melhor como estes se dividem pelo ecossistema.
              </ThemeSpan>
              <ThemeSpan color="white">
                O investimento eraly stage, que compreende anjo, pré-seed e
                seed, recebe a menor fatia do bolo, em parte por se tratar de
                rodadas menores, mas também porque é uma faixa de investimento
                considerada de alto risco, visto que essas empresas ainda não
                possuem reconhecimento no mercado.
              </ThemeSpan>
            </Column>
            <Bar />
            <Column lgw="80%" justify="flex-start" gap="15px">
              <ThemeSpan color="white">
                Os chamados late stages, referentes às séries A em diante,
                concetraram a maior parte de todo o investimento venture capital
                no país. Esses rounds atraem mais investidores por ser tratarem
                de empresas maiores, mais consolidadas e por haver mais
                possbilidades de saída do deal.
              </ThemeSpan>
              <ThemeSpan color="white">
                Destaque para a enorme quantia na série G, referente a uma única
                empresa: o Nubank.
              </ThemeSpan>
            </Column>
            <DefaultImg src={graphic01} />
          </ColumnToRow>
        </SwiperSlide>

        <SwiperSlide>
          <Column justify="space-between">
            <ThemeH3 color="white">
              NÚMERO DE APORTES E VOLUME DE INVESTIMENTOS
            </ThemeH3>
            <ThemeH4 color="white">Aplicados em startups no Brasil</ThemeH4>
          </Column>
          <ColumnToRow>
            <Column lgw="80%" justify="flex-start" gap="15px">
              <ThemeSpan color="white">
                O ano de 2021 ficou marcado como o que registrou maior atividade
                do mercado de venture capital nos últimos seis anos.
              </ThemeSpan>
              <ThemeSpan color="white">
                Alguns especialistas apontavam um crescimento enxuto devido à
                retomada ainda gradativa da economia, mas com a chegada do fim
                do ano, vimos que as teses mais otimistas se provaram
                verdadeiras.
              </ThemeSpan>
            </Column>
            <Bar />
            <Column lgw="70%" justify="flex-start" gap="15px">
              <ThemeSpan color="white">
                Além do volume e do tamanho médio dos deals terem aumentado,
                tivemos diversos mega rounds acontecendo ao longo do ano, o que
                ajuda a explicar a soma extraordinária investida em 2021 -
                aproximadamente US$ 9,4 bilhões.
              </ThemeSpan>
            </Column>
            <DefaultImg src={graphic02} />
          </ColumnToRow>
        </SwiperSlide>

        <SwiperSlide>
          <Column justify="space-between">
            <ThemeH3 color="white">
              NÚMERO DE APORTES E VOLUME DE INVESTIMENTOS POR SETOR
            </ThemeH3>
            <ThemeH4 color="white">Aplicados em startups no Brasil</ThemeH4>
          </Column>
          <ColumnToRow>
            <Column lgw="80%" justify="flex-start" gap="15px">
              <ThemeSpan color="white">
                Na diversão por setores, as fintechs lideram o quadro dos mais
                investidos, seguidos pelas retailtechs e Real Estate. Os dois
                primeiros são, historicamente, os setores mais prósperos do
                ecossistema de startups brasileiro, com muitos representantes
                entre unicórnios e sacle-ups. Conteudo, trata-se de setores
                carentes de tecnologia no cenário brasileiro.
              </ThemeSpan>
              <ThemeSpan color="white">
                O setor de real estate aparece bem colocado por conta dos seus
                outliers ou
              </ThemeSpan>
            </Column>
            <Bar />
            <Column lgw="70%" justify="flex-start" gap="15px">
              <ThemeSpan color="white">
                seja, startups que fogem do padrão das demais em seu grupo),
                Loft e Quinto Andar, ambas entre as maiores captações do ano. O
                reflexo disso é que o setor não é um destaque em realção ao
                número de deals. O setor de educação registrou um número
                razoável de deals e de investimentos, mas ainda enxergamos um
                enorme potencial de crescimento para o mesmo.
              </ThemeSpan>
            </Column>
            <DefaultImg src={graphic03} />
          </ColumnToRow>
        </SwiperSlide>
      </Slide>
    </DefaultDiv>
  );
};

export default Graphics;
