import {
  Column,
  DefaultDiv,
  DefaultImg,
  Row,
  ThemeH3,
  ThemeLink,
  ThemeSpan,
} from "../styles/Globals";
import verify from "../../assets/verificated.svg";
import { GradientBar, ZzzImg } from "./styles";
import interview from "../../assets/Small-Interview.png";
import interviewLarge from "../../assets/Large-Interview.png";
import zzz from "../../assets/Union.png";
import { useState } from "react";

const Interview = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <DefaultDiv>
      {width > 767 ? (
        <Row justify="center" gap="50px" lgw="100vw">
          <DefaultImg src={interviewLarge} w="100%" lgw="28%" margin="15px 0" />
          <Column justify="space-around" w="100%" lgw="28%">
            <DefaultImg src={verify} w="40px" lgw="40px" />
            <ThemeH3>INVEST LIKE A STAR</ThemeH3>
            <GradientBar></GradientBar>
            <ThemeSpan>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              fugiat deleniti veniam! Voluptatem nam consectetur harum alias
              exercitationem facere modi beatae ab hic dolore consequuntur,
              mollitia voluptatum voluptas ipsum pariatur.
            </ThemeSpan>
            <ThemeSpan>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              tempora provident ipsum? Unde hic tempore ea eaque numquam
              eligendi omnis sapiente odio, nobis neque, laboriosam modi nemo
              necessitatibus voluptate nesciunt.
            </ThemeSpan>
            <ThemeLink color="black" font="14px">
              <b>Agende uma entrevista →</b>
            </ThemeLink>
          </Column>
          <ZzzImg src={zzz} />
        </Row>
      ) : (
        <>
          <Column justify="space-around" w="100%" lgw="28%">
            <DefaultImg src={verify} w="40px" lgw="40px" />
            <ThemeH3>INVEST LIKE A STAR</ThemeH3>
            <GradientBar></GradientBar>
          </Column>
          <DefaultImg src={interview} w="100%" lgw="28%" margin="15px 0" />
          <Column w="100%" lgw="28%">
            <ThemeSpan>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              fugiat deleniti veniam! Voluptatem nam consectetur harum alias
              exercitationem facere modi beatae ab hic dolore consequuntur,
              mollitia voluptatum voluptas ipsum pariatur.
            </ThemeSpan>
            <ThemeSpan>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              tempora provident ipsum? Unde hic tempore ea eaque numquam
              eligendi omnis sapiente odio, nobis neque, laboriosam modi nemo
              necessitatibus voluptate nesciunt.
            </ThemeSpan>
            <ThemeLink color="black" font="14px">
              <b>Agende uma entrevista →</b>
            </ThemeLink>
          </Column>
        </>
      )}
    </DefaultDiv>
  );
};

export default Interview;
