import { styled } from "styled-components";

export const TextStyled = styled.p<{ fontSize?: string }>`
text-align: center;
font-size: ${(props) => props.fontSize || "20px"};
`

