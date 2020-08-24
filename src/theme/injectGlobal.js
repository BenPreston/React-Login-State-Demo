import { createGlobalStyle } from 'styled-components'

const mainColor = '#0812A1;'
const secondaryColor = '#2C8C99'
const thirdColor = '#333'

const GlobalStyle = createGlobalStyle`
    html {font-size: 18px }
    body {
        overflow-x: hidden;
        font-size: 1rem;
        line-height: 1.6;
        font-family: Courier New;
        color: ${mainColor};
      }
      img{ max-width: 100%;}

      a{
          color: ${mainColor};
          text-decoration: none;
          &:hover{
           color: ${secondaryColor};      
          }
      }
      *{
       box-sizing: border-box;
     }    
    .form-box{
        display: block;
        width: 80%;
        max-width: 400px;
        margin:1.5rem auto;
    }
    form{
      display: block;
      width: 100%;
      float: left;
    }
    .form-group{
      margin-bottom: 1rem;
      width: 100%;
      float: left;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
        font-weight: 500;
    }
    .form-input {
        display: block;
        width: 100%;
        line-height: 1.5;
        padding: .5rem .75rem;
        font-size: 1rem;
        color: ${thirdColor};
        background-color: ${secondaryColor};
        background-clip: padding-box;
        border:1px solid #ced4da;
        transition: border-color .5s ease-in-out;
        &:focus {
            color: #fff;
            background-color: ${thirdColor};
            border-color: ${secondaryColor};
            outline: 0;
        }
        &.error{
          border-color: red;
        }
    }
    .error-block{
      color: red;
      font-size: .8rem;
    }
    button, input {
        overflow: visible;
    }
    .form-btn {
        display: block;
        width: 100%;
        font-weight: 200;
        text-align: center;
        border: 1px solid ${thirdColor};
        padding: .5rem .75rem;
        font-size: 1.35rem;
        color: #fff;
        background-color: ${mainColor};
        transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .5s ease-in-out;
        &:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
        &:not(:disabled):not(.disabled):hover{
          background-color:${thirdColor};
          border-color:${thirdColor};
        }
    }
    .btn {
        display: inline-block;
        font-weight: 150;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid #bbb;
        padding: .25rem .5rem;
        margin: 5px
        font-size: .9rem;
        line-height: 1.25;
        border-radius: .25rem;
        color: #333;
        background-color: #fff;
        transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .5s ease-in-out;
        &:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
        &:not(:disabled):not(.disabled):hover{
          color: #111;
          background-color:#f7f7f7;
          border-color:#999 ;
        }
        &:focus{
          outline: none;
        }
        &.disabled, &:disabled {
            opacity: .65;
        }
    }
`
export default GlobalStyle
