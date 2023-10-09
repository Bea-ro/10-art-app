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
padding: 6px 8px;
color: grey
}

select {
width: 100%
}

#image {
display: none
}

#input-label {
background-color: var(--color-grey);
border-radius: var(--border-radius);
padding: 6px 8px;
color: grey;
box-shadow: 2px 2px 4px grey;
}
`  
