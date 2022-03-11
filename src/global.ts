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
    width: 100vw;
    max-width: 1920px;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  @font-face {
    font-family: "MuseoSansCyrl100";
    src: url("/src/assets/fonts/MuseoSansCyrl-100.eot");
    src: url("/src/assets/fonts/MuseoSansCyrl-100.eot?#iefix") format("embedded-opentype"),
    url("/src/assets/fonts/MuseoSansCyrl-100.woff") format("woff"),
    url("/src/assets/fonts/MuseoSansCyrl-100.ttf") format("truetype");
    font-style: normal;
    font-weight: 300;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    /* отображаем курсор в виде руки при наведении; некоторые
    считают, что необходимо оставлять стрелочный вид для кнопок */
    cursor: pointer;
  }

  button:disabled,
  button:disabled:hover,
  button[disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }

  a {
    text-decoration: none;
    &:hover {
      color: #333333;
    }
    &:visited {
      color: #333333;
    }
    &:active {
      color: #333333;
    }
    &:link{
      color: #333333;
    }
  }
  
`

