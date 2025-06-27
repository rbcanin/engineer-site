import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Outfit";
  src: url("/fonts/Outfit-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "OutfitRegular";
  src: url("/fonts/Outfit-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Caprismo";
  src: url("/fonts/Caprasimo-Regular.ttf");
  font-weight: 400;
}

  body {
    font-family: "OutfitRegular" !important;
    overflow-x: hidden;
  }
  
.outfit-bold{
    font-family: "Outfit" !important;
}

.caprismo{
    font-family: "Caprismo" !important;
}

::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #ABADB7;
}

::-webkit-scrollbar-thumb {
 background-color: #1C243E;
}


.container{
  max-width: 1750px;
  padding: 0 15px;
  margin: 0 auto;
}
`;
