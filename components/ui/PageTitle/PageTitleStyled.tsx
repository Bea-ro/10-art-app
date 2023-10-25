import { styled } from "styled-components";

export const PageTitleStyled = styled.h1<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || "60px"};
  color: var(--color-grey);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;

  @media screen and (max-width: 490px) {
    font-size: ${(props) => props.fontSize || "50px"};
    padding: 14px 16px 0 16px;
  }
`;
