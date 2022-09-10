import { DefaultDiv, DefaultImg, Row } from "../styles/Globals";
import customer1 from "../../assets/exame.png";
import customer2 from "../../assets/valor-economico.png";
import customer3 from "../../assets/forbes.png";
import customer4 from "../../assets/startse.png";
import customer5 from "../../assets/nexo.png";
import customer6 from "../../assets/Estadao.png";

const Customers = () => {
  return (
    <DefaultDiv>
      <Row scroll="scroll" w="100%" gap="25px">
        <DefaultImg src={customer1} w="151px" lgw="200px" />
        <DefaultImg src={customer2} w="75px" lgw="100px" />
        <DefaultImg src={customer3} w="90px" lgw="120px" />
        <DefaultImg src={customer4} w="140px" lgw="190px" />
        <DefaultImg src={customer5} w="110px" lgw="140px" />
        <DefaultImg src={customer6} w="115px" lgw="150px" />
      </Row>
    </DefaultDiv>
  );
};

export default Customers;
