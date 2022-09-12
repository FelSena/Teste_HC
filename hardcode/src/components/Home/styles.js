import styled from "styled-components";

export const CustomButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.w || "256px"};
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  @media (max-width: 767px) {
    width: ${(props) => props.lgw};
    height: 44px;
    display: ${(props) => props.display};
  }
  &:hover {
    box-shadow: -8px 6px 0px -1px rgba(0, 0, 0, 0.75);
  }
`;

export const HomeDiv = styled.div`
  width: 100%;
  background-color: black;
`;
