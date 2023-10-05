import { styled } from "styled-components";

export const ModalStyled = styled.div<{modal: boolean}>`
display: ${props => props.modal ? 'flex' : 'none'};
background-color: var(--color-beige);
border-radius: var(--border-radius);
padding: 20px;
`  
