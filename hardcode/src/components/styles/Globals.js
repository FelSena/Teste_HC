import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
}
a {
    text-decoration: none;
}
`;
export default GlobalStyle;

export const ThemeH1 = styled.h1`
  font-family: "Lora", serif;
  font-size: 64px;
  color: ${(props) => props.color};
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const ThemeH2 = styled.h2`
  font-family: "Lora", serif;
  font-size: 48px;
  color: ${(props) => props.color};
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const ThemeH3 = styled.h3`
  font-family: "Lora", serif;
  font-size: 24px;
  color: ${(props) => props.color};
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ThemeH4 = styled.h4`
  width: ${(props) => props.w || "100%"};
  font-family: "Lora", serif;
  text-align: ${(props) => props.text || "start"};
  font-size: 18px;
  color: ${(props) => props.color};
  @media (max-width: 767px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const ThemeSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: ${(props) => props.text || "start"};
  color: ${(props) => props.color};
  @media (min-width: 767px) {
    font-size: 16px;
  }
`;

export const DefaultImg = styled.img`
  width: ${(props) => props.w || "100%"};
  height: auto;
  margin: ${(props) => props.margin};
  @media (min-width: 768px) {
    width: ${(props) => props.lgw || "100%"};
  }
`;

export const Column = styled.div`
  width: ${(props) => props.w || "100%"};
  height: ${(props) => props.h};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.items};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
  @media (min-width: 768px) {
    width: ${(props) => props.lgw || "100%"};
  }
`;

export const Row = styled.div`
  display: flex;
  width: ${(props) => props.w || "100%"};
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.items || "center"};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  overflow-x: ${(props) => props.scroll};
  @media (min-width: 768px) {
    width: ${(props) => props.lgw || "100%"};
    overflow-x: hidden;
  }
`;

export const ColumnToRow = styled.div`
  width: ${(props) => props.w || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.items};
  padding: ${(props) => props.padding};
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const DefaultDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  padding: 7.5%;
`;

export const ThemeLink = styled.a`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.font || "white"};
  cursor: pointer;
`;

export const ThemeButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.w || "256px"};
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  @media (max-width: 767px) {
    width: ${(props) => props.lgw};
    height: 44px;
    display: ${(props) => props.display};
  }
`;
