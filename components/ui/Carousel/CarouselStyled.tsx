import { styled } from "styled-components";

export const CarouselStyled = styled.div` 
display: flex;
flex-direction: column;
align-items: center;

h2 {
  font-weight: bold
}

ul {
display: flex;
justify-content: space-around;
gap: 36px
}

li {
  background-color: var(--color-beige);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 10px;
  max-width: 25%;
  transition: transform .3s
}

li:hover {
  transform: scale(1.1);
}

a >  span > img {
    object-fit: contain;
}
`  

