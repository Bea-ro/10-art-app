import { styled } from "styled-components";

export const ButtonStyled = styled.button<{display?: string, buttonText: string}>` 
display: ${(props) => props.display || 'block'};
align-self: ${(props) => (props.buttonText === "x" ? 'flex-end': 'center')};
padding: ${(props) => (props.buttonText === "x" ? '1px 6px': '8px 10px')};
color: var(--color-grey);
background-color: var(--color-light-blue);
text-shadow: 2px 2px 4px var(--color-blue);
box-shadow: var(--box-shadow);
border-radius: var(--border-radius);
margin: 0 10px;
font-size: 22px;
width: fit-content;
cursor: pointer;
`  

