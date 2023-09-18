import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

:root {
  --color-blue: #96B6C5;
  --color-light-blue: #ADC4CE;
  --color-beige: #EEE0C9;
  --color-grey: #F1F0E8;
  --border-radius: 5px;
}

* {
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
}

a {
  text-decoration: none;
}

ul {
  padding-left: 0
}

li {
 list-style-type: none;
}
`