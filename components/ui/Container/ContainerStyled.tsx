import { styled } from "styled-components";

export const ContainerStyled = styled.div<{
  direction?: string;
  justify?: string;
  gap?: string;
  color?: string;
  background?: string;
  padding?: string;
  isModalOpen?: boolean;
  height?: string
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap || "18px"};
  opacity: ${(props) => (props.isModalOpen ? "50%" : "100%")};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  padding: 10px 20px;
  align-items: center;
  border-radius: var(--border-radius);
`;
