import { styled } from "styled-components";

export const ModalStyled = styled.div<{modal?: boolean}>`
display: ${props => props.modal ? 'flex' : 'none'};
`  
