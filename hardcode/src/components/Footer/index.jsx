import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.svg";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import {
  Column,
  ColumnToRow,
  DefaultDiv,
  DefaultImg,
  Row,
  ThemeH3,
  ThemeH4,
  ThemeLink,
} from "../styles/Globals";
import { ColorDiv } from "./styles";
import { faEnvelope, faFlag } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <DefaultDiv bg="black">
      <Row items="flex-start">
        <ColumnToRow>
          <Column>
            <ThemeH3 color="white">Buzzzzzzz</ThemeH3>
            <ThemeLink href="http://">Quem Somos</ThemeLink>
            <ThemeLink href="http://">Nosso Mercado</ThemeLink>
            <ThemeLink href="http://">Blog</ThemeLink>
            <ThemeLink href="http://">Contato</ThemeLink>
            <ThemeLink href="http://">Seja Buzzzzzzz</ThemeLink>
          </Column>
          <Column>
            <ThemeH3 color="white">Investidores</ThemeH3>
            <ThemeLink href="http://">Tese do Investidor</ThemeLink>
            <ThemeLink href="http://">Seja Investidor</ThemeLink>
            <ThemeLink href="http://">Nossos Investidores</ThemeLink>
          </Column>

          <Column>
            <ThemeH3 color="white">Startups</ThemeH3>
            <ThemeLink href="http://">Tese de Investimento</ThemeLink>
            <ThemeLink href="http://">Faça Aplicação</ThemeLink>
            <ThemeLink href="http://">Termo de Investimento</ThemeLink>
            <ThemeLink href="http://">Termo de Fllow on</ThemeLink>
          </Column>
        </ColumnToRow>

        <DefaultImg src={logo} alt="Logo Buzzzzzzz" w="80px" lgw="180px" />
      </Row>

      <ColorDiv />

      <ColumnToRow>
        <ThemeH4 color="white">
          Buzzzzzzz® - Todos os direitos reservados
        </ThemeH4>
        <Row justify="space-around" lgw="50%">
          <a href="http://">
            <FontAwesomeIcon icon={faLinkedinIn} inverse />
          </a>
          <a href="http://">
            <FontAwesomeIcon icon={faInstagram} inverse />
          </a>
          <a href="http://">
            <FontAwesomeIcon icon={faTwitter} inverse />
          </a>
          <a href="http://">
            <FontAwesomeIcon icon={faTelegramPlane} inverse />
          </a>
          <a href="http://">
            <FontAwesomeIcon icon={faEnvelope} inverse />
          </a>
          <a href="http://">
            <FontAwesomeIcon icon={faFlag} inverse />
          </a>
        </Row>
      </ColumnToRow>
    </DefaultDiv>
  );
};

export default Footer;
