import { styled } from "styled-components"

export const ItemsGridStyled = styled.ul<{flow?: string, isModalOpen?: boolean}>`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-flow: ${(props) => props.flow || "none"};
opacity: ${(props) => (props.isModalOpen  ? '50%' : '100%')};
justify-items: center;
gap: 60px;
padding: 10px 30px;
position: relative;
z-index: 1;
`  