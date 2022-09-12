import { useState } from "react";
import {
  Column,
  DefaultDiv,
  DefaultImg,
  Row,
  ThemeButton,
  ThemeH3,
  ThemeSpan,
} from "../styles/Globals";
import down from "../../assets/arrowDown.svg";
import up from "../../assets/arrowUp.svg";
import rock from "../../assets/rock.png";

const AboutUs = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <DefaultDiv>
      {width > 767 ? (
        <Row>
          <Column items="flex-end" lgw="45%">
            <ThemeH3>About Us</ThemeH3>
            <DefaultImg src={up} lgw="32px" />
            <DefaultImg src={rock} alt="The Rock" />
          </Column>
          <Column lgw="45%" justify="baseline" h="750px" gap="30px">
            <ThemeH3>
              Somos um clube de investimen to exclusivo focado em{" "}
              <b>media for equity.</b>
            </ThemeH3>
            <ThemeSpan>
              Por que? <br />
              Acreditamos que a atenção que você atrai e influência que gera são
              <b>ativos exponenciais.</b>
            </ThemeSpan>
            <ThemeSpan>
              Como? <br />
              Possibilitamos que multiplique esse ativo investindo em
              <b>startups de alto crescimento.</b>
            </ThemeSpan>
            <ThemeSpan>
              O que? <br />
              Potencialize sua receita como autoridade enquanto pode investindo
              em
              <b>media for equity.</b>
            </ThemeSpan>
            <ThemeButton bg="black" color="white">
              Aplicar
            </ThemeButton>
          </Column>
        </Row>
      ) : (
        <Column gap="10px">
          <ThemeH3>About Us</ThemeH3>
          <DefaultImg src={down} lgw="12px" w="12px" />
          <ThemeSpan>
            Somos um clube de investimen to exclusivo focado em
            <b>media for equity.</b>
          </ThemeSpan>
          <ThemeSpan>
            Por que? <br />
            Acreditamos que a atenção que você atrai e influência que gera são
            <b>ativos exponenciais.</b>
          </ThemeSpan>
          <ThemeSpan>
            Como? <br />
            Possibilitamos que multiplique esse ativo investindo em
            <b>startups de alto crescimento.</b>
          </ThemeSpan>
          <ThemeSpan>
            O que? <br />
            Potencialize sua receita como autoridade enquanto pode investindo em
            <b>media for equity.</b>
          </ThemeSpan>
          <DefaultImg src={rock} alt="The Rock" />
        </Column>
      )}
    </DefaultDiv>
  );
};

export default AboutUs;
