import { styled } from "styled-components";

export const ButtonStyled = styled.button<{
  display?: string;
  text: string;
}>`
  display: ${(props) => props.display || "block"};
  align-self: ${(props) => (props.text === "x" ? "flex-end" : "center")};
  padding: ${(props) =>
    props.text === "x"
      ? "1px 6px"
      : props.text === "<" || props.text === ">"
      ? "4px 12px"
      : "8px 10px"};
  color: var(--color-grey);
  background-color: var(--color-light-blue);
  text-shadow: 2px 2px 4px var(--color-blue);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  font-size: 22px;
  width: fit-content;
  cursor: pointer;

  @media screen and (max-width: 567px) {
    display: ${(props) => props.display || "block"};
    padding: ${(props) => (props.text === "x" ? "1px 6px" : "5px")};
    font-size: 18px;
  }
`;
