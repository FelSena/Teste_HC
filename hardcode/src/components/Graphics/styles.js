import styled from "styled-components";

export const Bar = styled.div`
  width: 10px;
  height: 400px;
  border-radius: 10px;
  margin: 0 10px;
  display: block;
  background: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    display: none;
  } ;
`;
