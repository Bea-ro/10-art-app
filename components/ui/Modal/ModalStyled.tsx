import { styled } from "styled-components";

export const ModalStyled = styled.div<{ top?: string }>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-beige);
  border-radius: var(--border-radius);
  padding: 20px;
  width: fit-content;
  align-self: center;
  box-shadow: var(--box-shadow);
  position: absolute;
  z-index: 2;
  top: ${(props) => props.top || "70%"};
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
`;
