import { styled } from "styled-components";

export const CarouselStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: bold;
  }

  ul {
    display: flex;
    justify-content: space-around;
    gap: 36px;
  }
`;
