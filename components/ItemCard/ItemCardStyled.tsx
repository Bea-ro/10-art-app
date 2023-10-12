import { styled } from "styled-components"

export const ItemCardStyled = styled.li`
background-color: var(--color-beige);
border-radius: var(--border-radius);
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
box-shadow: 2px 2px 4px var(--color-grey);

h3 {
    font-size: 18px;
    color: black
    }

img {
    object-fit: cover;
    object-position: center 30%;
    border-radius: 2%
}
`  