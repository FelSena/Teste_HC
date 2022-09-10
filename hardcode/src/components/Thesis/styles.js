import styled from "styled-components";

export const BlackDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
  background-color: #000;
  display: flex;
  justify-content: center;
  top: 0;
  @media (max-width: 767px) {
    height: 200px;
  }
`;

export const RelativeBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  bottom: 200px;

  @media (max-width: 767px) {
    bottom: 50px;
  }
`;
