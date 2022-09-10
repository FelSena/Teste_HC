import {
  Column,
  DefaultDiv,
  DefaultImg,
  Row,
  ThemeH4,
  ThemeLink,
  ThemeSpan,
} from "../styles/Globals";
import leonardo from "../../assets/Leonardo_DiCaprio.png";
import beyonce from "../../assets/Beyonce.png";

const News = () => {
  return (
    <DefaultDiv>
      <Row scroll="scroll" w="100%" gap="30px" justify="space-aroound">
        <Column w="300px" lgw="540px">
          <DefaultImg src={beyonce} alt="Beyonce" w="200px" lgw="540px" />
          <ThemeH4>
            Beyoncé lidera rodada de US$ 31 milhões em empresa de água
            saborizada
          </ThemeH4>
          <ThemeSpan>
            A Lemon Perfect, marca de água saborizada, recebeu um aporte no
            valor de US$ 31 milhões em rodada Série A, liderado pela artista e
            empresária premiada internacionalmente.
          </ThemeSpan>
          <ThemeLink color="black" font="12px">
            <b>Leia mais →</b>
          </ThemeLink>
        </Column>
        <Column w="300px" lgw="540px">
          <DefaultImg src={leonardo} alt="Beyonce" w="200px" lgw="540px" />
          <ThemeH4>
            DiCaprio é novo sócio de Lewis Hamilton em império de hambúrguer
            vegano
          </ThemeH4>
          <ThemeSpan>
            A marca de alimentos à base de plantas Neat Food, anunciou o início
            de um contrato de US$ 30 milhões de fundos da Série B para
            impulsionar seu crescimento.
          </ThemeSpan>
          <ThemeLink color="black" font="12px">
            <b>Leia mais →</b>
          </ThemeLink>
        </Column>
      </Row>
    </DefaultDiv>
  );
};

export default News;
