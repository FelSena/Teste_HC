import {
  Column,
  ColumnToRow,
  DefaultDiv,
  DefaultImg,
  ThemeButton,
  ThemeH2,
  ThemeSpan,
} from "../styles/Globals";
import zzz from "../../assets/zzz.png";
import like from "../../assets/like-icons.png";
import jayz from "../../assets/jay-z.png";

const Startups = () => {
  return (
    <DefaultDiv bg="black">
      <ColumnToRow items="center">
        <Column w="100%" lgw="28%" items="center" gap="25px" h="540px">
          <ThemeH2 color="white">PARA STARTUPS</ThemeH2>
          <ThemeSpan color="white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            consequuntur quisquam voluptas sapiente, itaque hic delectus eaque
            laborum expedita aut in ipsam odio enim natus iste numquam! Enim,
            quisquam ea. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nobis quisquam ab modi, quod quos illo ex inventore, error
            porro exercitationem facere harum! Temporibus laborum expedita
            obcaecati perferendis totam illo quas!
          </ThemeSpan>
          <DefaultImg src={zzz} alt="zzz" w="110px" lgw="160px" />;
        </Column>

        <DefaultImg
          src={jayz}
          alt="Jay-z"
          w="245px"
          lgw="290px"
          margin="10px 0 15px 0"
        />

        <Column
          w="100%"
          lgw="28%"
          h="540px"
          items="center"
          justify="space-between"
        >
          <Column items="center" justify="space-between" gap="25px">
            <DefaultImg src={like} alt="Heart Icon" w="150px" lgw="160px" />
            <ThemeSpan color="white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              consequuntur quisquam voluptas sapiente, itaque hic delectus eaque
              laborum expedita aut in ipsam odio enim natus iste numquam! Enim,
              quisquam ea. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Recusandae doloribus molestias suscipit tenetur magni
              voluptate, officia, similique beatae sit sequi inventore culpa
              ratione et in quo aperiam hic! Vero, sed!
            </ThemeSpan>
          </Column>
          <ThemeButton display="none">Aplicar</ThemeButton>
        </Column>
      </ColumnToRow>
    </DefaultDiv>
  );
};

export default Startups;
