import { styled } from "styled-components";

export const FilterStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;

  #clear-filter {
    color: black;
  border: 1px solid black;
  }

button, select {
  font-size:13px;
  background-color: transparent;
  color: grey;
  border: 1px solid grey;
  text-shadow: none;
  box-shadow: none;
  padding: 5px 7px
}

select {
  display: none
}

button:hover {
  color: black;
  border: 1px solid black
}

@media screen and (max-width: 567px) {
  button {
    display: none;
  }
  #clear-filter, select {
    display: flex
  }
}
`;
