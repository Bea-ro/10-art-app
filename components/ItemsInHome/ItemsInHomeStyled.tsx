import { styled } from "styled-components";

export const ItemsInHomeStyled = styled.div`
  position: relative;
  padding: 0 10px 10px 10px;

  @media screen and (max-width: 567px) {
    div {
      justify-content: flex-start;
    }
  }
`;
