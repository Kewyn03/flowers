import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    color: #ffffff;
    max-width: 1920px;
    
    margin: 0 auto;
    padding: 0;
  }
  
  ul,li {
    list-style: none;
  }

  @font-face {
    font-family: "MuseoSansCyrl100";
    src: url("/fonts/MuseoSansCyrl-100.eot");
    src: url("/fonts/MuseoSansCyrl-100.eot?#iefix")format("embedded-opentype"),
    url("/fonts/MuseoSansCyrl-100.woff") format("woff"),
    url("/fonts/MuseoSansCyrl-100.ttf") format("truetype");
    font-style: normal;
    font-weight: 300;
  }
  `