import { styled } from "styled-components";

export const MessageStyled = styled.p<{ padding?: string; shadow?: string }>`
  /* background-color: var(--color-beige); */
  border-radius: var(--border-radius);
  padding: ${(props) => props.padding || "8px 10px"};
  /* box-shadow: ${(props) => props.shadow || "2px 2px 4px var(--color-grey)"}; */
  width: fit-content;
  align-self: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;
