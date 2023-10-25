import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0 20px;

  img {
    display: none !important;
  }

  @media screen and (max-width: 567px) {
    padding: 14px 14px 0 14px;
  }
`;
