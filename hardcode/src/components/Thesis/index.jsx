import {
  Column,
  ColumnToRow,
  DefaultDiv,
  DefaultImg,
  Row,
  ThemeH3,
  ThemeSpan,
} from "../styles/Globals";
import { BlackDiv, RelativeBox } from "./styles";
import video from "../../assets/video.png";

const Thesis = () => {
  return (
    <DefaultDiv bg="linear-gradient(180deg, rgba(0,0,0,1) 35%, rgba(255,255,255,1) 35%)">
      <BlackDiv>
        <ThemeH3 color="white">TESE DE INVESTIMENTO</ThemeH3>
      </BlackDiv>
      <RelativeBox>
        <DefaultImg src={video} />
        <ColumnToRow lgw="100%">
          <Column>
            <ThemeSpan>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              molestias fugiat saepe, culpa quisquam cupiditate consequuntur
              minus error autem dolor nisi veritatis natus sequi officiis!
              Cupiditate harum non fugit voluptate? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repudiandae unde corporis maxime
              nostrum consequuntur sed iusto accusantium recusandae, libero
              temporibus esse assumenda et obcaecati adipisci cupiditate magnam
              eaque voluptate voluptatum!
            </ThemeSpan>
            <ThemeSpan>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              molestias fugiat saepe, culpa quisquam cupiditate consequuntur
              minus error autem dolor nisi veritatis natus sequi officiis!
              Cupiditate harum non fugit voluptate? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas dolorum, suscipit corrupti amet
              quos blanditiis error voluptatum sed consectetur consequatur quia
              esse, excepturi quod. Quos illo facilis obcaecati architecto at!
            </ThemeSpan>
          </Column>
          <Column>
            <ThemeSpan>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              molestias fugiat saepe, culpa quisquam cupiditate consequuntur
              minus error autem dolor nisi veritatis natus sequi officiis!
              Cupiditate harum non fugit voluptate? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque exercitationem laboriosam
              laudantium quis temporibus, corrupti nesciunt quam necessitatibus
              eius suscipit a quibusdam magni omnis tempore accusamus molestias
              similique fugiat! Quas!
            </ThemeSpan>
            <ThemeSpan>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              molestias fugiat saepe, culpa quisquam cupiditate consequuntur
              minus error autem dolor nisi veritatis natus sequi officiis!
              Cupiditate harum non fugit voluptate?
            </ThemeSpan>
          </Column>
        </ColumnToRow>
      </RelativeBox>
    </DefaultDiv>
  );
};

export default Thesis;
