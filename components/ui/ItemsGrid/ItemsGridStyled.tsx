import { styled } from "styled-components"

export const ItemsGridStyled = styled.ul<{flow?: string, isModalOpen?: boolean, itemType: string}>`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-flow: ${(props) => props.flow || "none"};
opacity: ${(props) => (props.isModalOpen  ? '50%' : '100%')};
height: ${(props) => (props.itemType === 'artworks'  ? '65vh' : '30vh')};
gap: 40px;
justify-items: center;
padding: 10px 30px;
position: relative;
z-index: 1;
overflow-y: scroll;
scroll-behavior: smooth;
`  