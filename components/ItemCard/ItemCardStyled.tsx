import { styled } from "styled-components";

export const ItemCardStyled = styled.li<{
  display?: string;
  width?: string;
  imagefit?: string;
  isModalOpen?: boolean;
  mobile?: string
  tablet?: string
}>`
display: flex;
  display: ${(props) => props.display || "flex"};
  max-width: ${(props) => props.width || "100%"};
  opacity: ${(props) => (props.isModalOpen ? "50%" : "100%")};
  background-color: var(--color-beige);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 10px;
  transition: transform 0.3s;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  h2, h3 {
    font-size: 18px;
    color: black;
  }

  a > span > img {
    object-fit: ${(props) => props.imagefit || "contain"};
    object-position: center 30%;
    border-radius: 2%;
  }

  @media screen and (max-width: 567px) {
    display: ${(props) => props.mobile || "flex"};
    min-width: 102px;

  h2, h3 {
    font-size: 16px;
  }
  
  a > span > img {
  object-fit: cover;
  }

  &:hover {
    transform: none;
  }
  }

  @media screen and (min-width: 567px) and (max-width: 730px) {
  display: ${(props) => props.tablet || "flex"};
  }
`;
