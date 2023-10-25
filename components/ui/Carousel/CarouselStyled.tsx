import { styled } from "styled-components";

export const CarouselStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-around;
    gap: 36px;
    width: 75vw;
  }

  @media screen and (max-width: 567px) {
    align-items: flex-start;
    overflow-x: scroll;
    scroll-behavior: smooth;
    ul {
      justify-content: flex-start;
    }

    button {
      display: none;
    }
  }
`;
