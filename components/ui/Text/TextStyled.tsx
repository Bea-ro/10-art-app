import { styled } from "styled-components";

export const TextStyled = styled.p<{
  fontSize?: string;
  color?: string;
  background?: string;
}>`
  text-align: center;
  font-size: ${(props) => props.fontSize || "24px"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.background || "transparent "};

  @media screen and (max-width: 490px) {
    font-size: 18px;
    padding: 0 12px 0 12px;
  }
`;
