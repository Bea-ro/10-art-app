import { styled } from "styled-components";

export const ModalStyled = styled.div`
/* display: ${props => props.modal ? 'flex' : 'none'}; */
display: flex;
flex-direction: column;
background-color: var(--color-beige);
border-radius: var(--border-radius);
padding: 20px;
width: fit-content;
align-self: center;
box-shadow: 2px 2px 4px var(--color-grey);
`  
