import styled from "styled-components";

export const StartupDiv = styled.div`
  width: 100vw;
  height: 700px;
  background-image: url(${(props) => props.img});
  background-repeat: space;

  @media (max-width: 767px) {
    background-size: 1300px;
    height: 290px;
  }
`;
