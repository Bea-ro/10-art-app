import { styled } from "styled-components";

export const SubtitleStyled = styled.h2<{ align?: string }>`
  font-size: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 14px;
  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: 490px) {
    font-size: 28px;
    text-align: ${(props) => props.align || "center"};
  }
`;
