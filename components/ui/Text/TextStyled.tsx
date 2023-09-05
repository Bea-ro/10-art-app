import { styled, ThemedStyledProps } from "styled-components";

export const TextStyled = styled.p<ThemedStyledProps<{ fontSize?: string }>>`
text-align: center;
font-size: ${(props) => props.fontSize || "20px"};
`

