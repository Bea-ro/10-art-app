import { styled } from "styled-components"

export const ItemCardStyled = styled.li<{display?:string, width?:string, imageFit?:string}>`
display: ${(props) => props.display || 'flex'};
max-width: ${(props) => props.width || '100%'};
background-color: var(--color-beige); //gris
border-radius: var(--border-radius);
box-shadow: var(--box-shadow);
padding: 10px;
transition: transform .3s;
flex-direction: column;
align-items: center;
justify-content: center; 

&:hover {
  transform: scale(1.1);
}

h3 {
    font-size: 18px;
    color: black
    }

a >  span > img {
  object-fit: ${(props) => props.imageFit || 'cover'};
    object-position: center 30%;
    border-radius: 2%
    //b&n
}
`  