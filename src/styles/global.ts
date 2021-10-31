import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-size: 14px;
    }

    :root {
        --primary: #27AE60;
        --secondary: #EB5757;
        --gray600: #333333;
        --grey300: #828282;
        --grey100: #E0E0E0;
        --grey0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }

    h1 {
        font-weight: bold;
        font-size: 26px;
    }
    h2 {
        font-weight: bold;
        font-size: 22px;
    }
    h3 {
        font-weight: bold;
        font-size: 28px;
    }
    h4, h5, h6 {
        font-weight: bold;
        font-size: 16px;
    }

    button:hover {
        cursor: pointer;
    }


`;
