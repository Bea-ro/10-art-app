import { styled } from "styled-components"

export const ItemsGridStyled = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 14px;
padding: 10px 30px
`  