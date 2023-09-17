import { styled } from "styled-components";

export const TextStyled = styled.p<{ fontSize?: string, color?: string, background?: string }>`
text-align: center;
font-size: ${(props) => props.fontSize || "20px"};
color: ${(props) => props.color || "black"};
background-color: ${(props) => props.background || "transparent "};
`

