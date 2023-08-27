import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap');

@font-face {
    font-family: 'Sorts Mill Goudy', serif;
    src: url('https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap');
    font-weight: 400;
    font-style: normal;
    
}

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
  font-size: 15px
}

a {
  text-decoration: none;
}

li {
 list-style-type: none;
}
`