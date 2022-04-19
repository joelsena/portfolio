import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        font-family: 'Arial', sans-serif;
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    body,
    input,
    textarea,
    button {
        font: 400 1rem 'Arial', sans-serif;
    }

    body {
        min-height: 100vh;

        > div {
            width: 100%;
            height: 100%;
        }

        background: red;
    }

    p {
        line-height: 150%;
        font-size: 1.6rem;
    }

    *,
    button,
    input {
        border: 0;
        background: none;
    }

    a,
    button {
        cursor: pointer;
        font-family: 'Inter', sans-serif;
    }

    h1,
    h2 {
        font-family: 'Inter', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    :root {
        --primary: #2D8CEB;
        --secondary: #EBA42D;

        --text: #2E2E2E;
        --background: #f5f5f5;
        --white: #ffffff;
        --black: #000000;
        --gray_light: #DCDCDC;
        --placeholder: #BEBEBE;
        --title: #3B3B3B;
        --blue_light: #DCEEFF;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75; // 15px
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5; // 14px
        }
    }
`
