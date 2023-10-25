import { styled } from "styled-components";

export const MessageStyled = styled.p<{ padding?: string }>`
  border-radius: var(--border-radius);
  padding: ${(props) => props.padding || "8px 10px"};
  width: fit-content;
  align-self: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;
