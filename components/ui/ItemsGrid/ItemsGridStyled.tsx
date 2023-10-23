import { styled } from "styled-components";

export const ItemsGridStyled = styled.ul<{
  isModalOpen?: boolean;
  itemType?: string;
}>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  justify-items: center;
  padding: 30px;
  z-index: 1;
  scroll-behavior: smooth;
  h3 {
    font-weight: bold;
  }
`;
