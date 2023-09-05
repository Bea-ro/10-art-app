import { styled, ThemedStyledProps } from "styled-components"

export const ContainerStyled = styled.div<ThemedStyledProps<{ flexDirection?: string }>>`
display: flex;
flex-direction: ${(props) => props.flexDirection || "row"};
justify-content: ${(props) => props.justifyContent || "center"};
align-items: center;
gap: 12px;
padding: 20px;
`  
