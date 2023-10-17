import { styled } from "styled-components";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

input, select, #area {
background-color: var(--color-grey);
border-radius: var(--border-radius);
padding: 6px 8px;
color: grey
}

select {
width: 100%
}

#area {
    width: 100%;
}

#area-names {
    display: flex;
    text-align: left;
    gap: 0.5em;
    align-items: baseline;
}

#image {
    display: none
}

#image-input-label {
background-color: var(--color-grey);
border-radius: var(--border-radius);
padding: 6px 8px;
color: grey;
box-shadow: 2px 2px 4px grey;
}

span {
    color: grey;
}
`  
