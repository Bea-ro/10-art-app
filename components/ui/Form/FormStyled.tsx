import { styled } from "styled-components";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
justify-content: center;

input, select {
background-color: var(--color-grey);
border-radius: var(--border-radius);
padding: 8px 10px
}
`  
