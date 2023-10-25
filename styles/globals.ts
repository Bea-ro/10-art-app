import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root {
  --color-blue: #96B6C5;
  --color-light-blue: #ADC4CE;
  --color-beige: #EEE0C9;
  --color-grey: #F1F0E8;
  --border-radius: 5px;
  --box-shadow: 2px 2px 4px var(--color-grey);
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

button:disabled {
color: var(--color-grey);
background-color: var(--color-beige);
box-shadow: var(--box-shadow);
}

.button {
color: var(--color-grey);
background-color: var(--color-light-blue);
text-shadow: 2px 2px 4px var(--color-blue);
box-shadow: var(--box-shadow);
border-radius: var(--border-radius);
padding: 8px 10px;
margin: 0 10px;
font-size: 22px;
width: fit-content;
align-self: center;
}

.background-image-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1
  }
  
  .background-image {
  opacity: 0.6;
  z-index: -1;
  object-fit: cover;
  }

  main > div > span > img {
  object-fit: contain;
}

.author-link {
  font-weight: bold;
   color: black; 
   text-decoration: none
}

  @media screen and (max-width: 567px) {
  .button {
  font-size: 18px;
  padding: 5px;

  
}

.artwork-info {
  padding: 0 14px
}

}
  `;
