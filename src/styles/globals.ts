import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --black_900: #181818;
        --black_800: #1D1D1D;
        --black_600: #333333;

        --gray_900: #515152;
        --gray_600: #909096;
        --gray_400: #B4B4B4;

        --wine_500: #AB134D;
        --green_600: #13AB1E;
    }

    html {
        font: 400 16px 'Arial', sans-serif;
    }

    html,
    body,
    #root {

        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    input,
    textarea,
    button {
        font: 400 1rem 'Arial', sans-serif;
    }

    body {
        min-height: 100vh;

        > div {
            width: 100%;
            /* height: 100%; */
            min-height: 100vh;
        }

        background: var(--black_800);
        color: white;
    }

    p {
        line-height: 150%;

        color: var(--gray_400);
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

    h1 {
        font-size: 5rem;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%; // 15px
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%; // 14px

            h1 {
                font-size: 4rem; // 12px
            }
        }
    }
`
