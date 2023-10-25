import { styled } from "styled-components";

export const LayoutStyled = styled.main<{ auth?: boolean }>`
  min-height: 76vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 567px) {
    justify-content: ${(props) => (props.auth ? "space-around" : "center")};
  }
`;
