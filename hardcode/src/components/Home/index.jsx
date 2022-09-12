import Slide from "../Slide";
import {
  Column,
  ColumnToRow,
  DefaultImg,
  Row,
  ThemeButton,
  ThemeH1,
  ThemeH2,
  ThemeSpan,
} from "../styles/Globals";
import { SwiperSlide } from "swiper/react";

import logo from "../../assets/logo.svg";
import { CustomButton, HomeDiv } from "./styles";
import heart from "../../assets/heart.svg";
import coment from "../../assets/coment.svg";
import verificated from "../../assets/verificated.svg";
import "./style.css";

const Home = () => {
  return (
    <HomeDiv>
      <Slide>
        <SwiperSlide>
          <div className="serena base_bg">
            <Column gap="30px">
              <DefaultImg src={logo} lgw="100px" w="70px" />
              <ThemeH1 color="white">MEDIA FOR EQUITY</ThemeH1>
              <ThemeH2 color="white">
                Invest like a <b>Williams</b>
              </ThemeH2>
              <ColumnToRow justify="flex-start" gap="20px">
                <ThemeButton>Seja investidor</ThemeButton>
                <CustomButton>Para StartUps</CustomButton>
              </ColumnToRow>
              <Row justify="flex-start" gap="20px" lgw="30%" items="baseline">
                <DefaultImg src={heart} lgw="30px" w="30px" />
                <ThemeSpan color="white">
                  Serena Williams, uma das maiores tenistas de todos os tempos;
                  já investiu em 60 startups, sendo que 13 viraram unicórnios.
                  Acabou de criar um fundo de US$ 111 milhões.
                </ThemeSpan>
              </Row>
            </Column>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bono base_bg">
            <Column gap="30px">
              <DefaultImg src={logo} lgw="100px" w="70px" />
              <ThemeH1 color="white">MEDIA FOR EQUITY</ThemeH1>
              <ThemeH2 color="white">
                Invest like a <b>Williams</b>
              </ThemeH2>
              <ColumnToRow justify="flex-start" gap="20px">
                <ThemeButton>Seja investidor</ThemeButton>
                <CustomButton>Para StartUps</CustomButton>
              </ColumnToRow>
              <Row justify="flex-start" gap="20px" lgw="30%" items="baseline">
                <DefaultImg src={coment} lgw="30px" w="30px" />
                <ThemeSpan color="white">
                  Bono Vox é o cantor mais rico do mundo, mas a maior parte da
                  fortuna não veio da música. Ele comprou comprou 2,3% do
                  Facebook, e isso hoje equivale US$ 12,9 bilhão. Conor McGregor
                  é o atleta mais bem pago do mundo. Ele recebeu S$ 22 milhões
                  lutando e US$ 158 milhões faz parte de patrocínios e retorno
                  de investimento em startup. Serena Williams, uma das maiores
                  tenistas de todos os tempos; já investiu em 60 startups, sendo
                  que 13 viraram unicórnios. Acabou de criar um fundo de US$ 111
                  milhões.
                </ThemeSpan>
              </Row>
            </Column>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="conor base_bg">
            <Column gap="30px">
              <DefaultImg src={logo} lgw="100px" w="70px" />
              <ThemeH1 color="white">MEDIA FOR EQUITY</ThemeH1>
              <ThemeH2 color="white">
                Invest like a <b>Williams</b>
              </ThemeH2>
              <ColumnToRow justify="flex-start" gap="20px">
                <ThemeButton>Seja investidor</ThemeButton>
                <CustomButton>Para StartUps</CustomButton>
              </ColumnToRow>
              <Row justify="flex-start" gap="20px" lgw="30%" items="baseline">
                <DefaultImg src={verificated} lgw="30px" w="30px" />
                <ThemeSpan color="white">
                  Conor McGregor é o atleta mais bem pago do mundo. Ele recebeu
                  S$ 22 milhões lutando e US$ 158 milhões faz parte de
                  patrocínios e retorno de investimento em startup.
                </ThemeSpan>
              </Row>
            </Column>
          </div>
        </SwiperSlide>
      </Slide>
    </HomeDiv>
  );
};

export default Home;
