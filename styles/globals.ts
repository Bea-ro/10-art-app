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
  --color-dark-blue: #004b6b;
  --color-mid-blue: #00819e;
  --color-light-blue: #00b3aa;
  --color-yellow: #f5de4d;
  --color-salmon: #f05c5c;
  --border-radius: 3px;
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