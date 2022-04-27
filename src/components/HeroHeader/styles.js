import styled from 'styled-components';

import background from '../../assets/background-image.png';
export const Container = styled.div`
    width: 100vw;
    height: 100%;

    display: flex;
    align-items: center;

    background: url(${background}) no-repeat;
    background-size: auto;
    background-position: right;
    overflow-x: hidden;

    @media (max-width: 740px) {
        background-size: cover;
    }
`;

export const Text = styled.div`
    width: 1440px;
    margin: 0 auto;
    padding: 0 1.5rem;

    h2 {
        font-size: 0.8rem;
        color: var(--white);
        opacity: 0.5;
    }

    h1 {
        margin: 2rem 0;
        width: 50rem;
        font-size: 2.25rem;
        color: var(--white);
        line-height: 3rem;
    }

    @media (max-width: 740px) {
        text-align: center;

        h1 {
            width: 100%;
            font-size: 1.7rem;
        }
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 1.2rem;
            line-height: normal;
        }
    }
`;

export const Buttons = styled.div`
    button {
        width: 12rem;
        padding: 1rem 0;
        font-size: 1.2rem;
        border-radius: 5.6rem;
        background: none;
        border: 1px solid white;
        color: var(--white);

        margin-right: 1rem;
    }
    .button-active {
        background: var(--primary);
        border: 1px solid transparent;
    }

    @media (max-width: 740px) {
        button {
            width: 8rem;
            font-size: 0.8rem;
        }
    }
`;
