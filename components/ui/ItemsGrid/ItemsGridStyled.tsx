import { styled } from "styled-components"

export const ItemsGridStyled = styled.ul<{flow?: string}>`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-flow: ${(props) => props.flow || "none"};
justify-items: center;
gap: 60px;
padding: 10px 30px
`  