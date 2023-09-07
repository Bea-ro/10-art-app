import { styled, ThemedStyledProps } from "styled-components"

export const ContainerStyled = styled.div<ThemedStyledProps<{ flexDirection?: string}>>`
display: flex;
flex-direction: ${(props) => props.flexDirection || "row"};
justify-content: ${(props) => props.justifyContent || "center"};
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
align-items: center;
gap: 12px;
padding: 20px;
border-radius: var(--border-radius)
`  
