import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: .5rem;
}

    *::-webkit-scrollbar-track {
        background-color: rgba(31, 29, 43, 0.12);
        backdrop-filter: blur(45px);
    }

    *::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 20px;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    body, #root{
        font-family: 'Inter', sans-serif;
        width: 100%;
        height: 100vh;
        background-color: var(--background);
    }

    :root{
        --primary: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
        --white: #FFFFFF;
        --dark-blue:  #252836;
        --background: #2F3142;

        
    }

    input{
        font-family: 'Inter', sans-serif;
        border: none;
        outline: none;
        
    }
    button{
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        border: none;
    }
    a{
        color: var(--white);
        text-decoration: none;
    }

    
`;
