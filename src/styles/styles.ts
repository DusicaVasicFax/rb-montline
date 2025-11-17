import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #C8102E;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #C8102E 0px 0px 0px 1px;
        }
    }

    h1 {
        font-family: 'Motiva Sans Bold', serif;
        color: #C8102E;
        font-size: 48px;
        line-height: 1.3;
        font-weight: 700;
        margin-bottom: 1.5rem;
        letter-spacing: -0.5px;

        @media only screen and (max-width: 890px) {
          font-size: 40px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    h2 {
        font-family: 'Motiva Sans Bold', serif;
        color: #C8102E;
        font-size: 36px;
        line-height: 1.4;
        font-weight: 700;
        margin-bottom: 1.25rem;
        letter-spacing: -0.3px;

        @media only screen and (max-width: 890px) {
          font-size: 32px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 26px;
        }
    }

    h3 {
        font-family: 'Motiva Sans Bold', serif;
        color: #C8102E;
        font-size: 28px;
        line-height: 1.4;
        font-weight: 700;
        margin-bottom: 1rem;

        @media only screen and (max-width: 890px) {
          font-size: 24px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 22px;
        }
    }

    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #C8102E;
        font-size: 22px;
        line-height: 1.5;
        font-weight: 600;
        margin-bottom: 0.75rem;

        @media only screen and (max-width: 890px) {
          font-size: 20px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 18px;
        }
    }

    p {
        color: #333333;
        font-size: 16px;
        line-height: 1.7;
        margin-bottom: 1rem;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #C8102E;

        :hover {
            color: #A00E26;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
