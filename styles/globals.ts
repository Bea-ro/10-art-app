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
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
}

body {
  background-image: url('https://res.cloudinary.com/dnlceaase/image/upload/v1694962965/art-api/portada_jyuzfq.jpg');
background-size: cover;
background-position: center;
background-color: rgba(255, 255, 255, 0.7);
}

a {
  text-decoration: none;
}

li {
 list-style-type: none;
}
`