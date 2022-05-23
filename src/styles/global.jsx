import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    body,
    input,
    textarea,
    button {
    font-family:'Roboto', sans-serif;
    outline: none;
    -webkit-font-smoothing: antialiased;
    }

    input{
      padding: 5px;
    }

    button{
      cursor: pointer;

      :hover{
        border:2px solid #d089ea;
      }
    }
    .middle{
      border-left: 1px solid rgba(229, 229, 229, 1);
      border-right: 1px solid rgba(229, 229, 229, 1);
    }






`;
