import { styled } from "styled-components";

export const ModalStyled = styled.div<{top?: string}>`
display: flex;
flex-direction: column; 
background-color: var(--color-beige);
border-radius: var(--border-radius);
padding: 20px;
width: fit-content;
align-self: center;
box-shadow: var(--box-shadow);
position: absolute;
z-index: 2;
//top en addForm 3%; 47% en carrusel
top: ${(props) => props.top};
`  
