import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font: 400 1rem Lato, sans-serif;
  }

  button {
    font: 400 0.875rem Inter, sans-serif;
    cursor: pointer;
    transition: all 0.4 ease;
    
    :hover {
      opacity: 0.8;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.875rem;
    color: ${(props) => props.theme['gray-100']};
  }

  h3 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.25rem;
  }

  h5 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${(props) => props.theme['gray-100']};
    margin-bottom: 0.25rem;
  }

`
