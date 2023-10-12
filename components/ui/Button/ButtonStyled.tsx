import { styled } from "styled-components";

export const ButtonStyled = styled.button<{display?: string}>` 
display: ${(props) => props.display || 'block'};
color: var(--color-grey);
background-color: var(--color-light-blue);
text-shadow: 2px 2px 4px var(--color-blue);
box-shadow: 2px 2px 4px var(--color-grey);
border-radius: var(--border-radius);
padding: 8px 10px;
margin: 0 10px;
font-size: 22px;
width: fit-content;
align-self: center;
cursor: pointer;
`  

