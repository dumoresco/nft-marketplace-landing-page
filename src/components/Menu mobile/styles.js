import styled, { css } from 'styled-components';

export const Container = styled.div`
    z-index: 99999;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: none;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background-color: rgba(31, 29, 43, 0.12);
    backdrop-filter: blur(45px);

    pointer-events: none;

    .close-icon {
        color: var(--white);
        position: absolute;
        right: 25px;
        top: 25px;
        cursor: pointer;
    }
    ${({ isVisible }) =>
        isVisible &&
        css`
            display: flex;
            pointer-events: auto;
        `}

    @media(min-width:780px) {
        display: none;
    }
`;
export const Menu = styled.nav`
    display: flex;
    justify-content: flex-start;
    margin-top: 5rem;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const Group = styled.div`
    width: 20rem;
    background: var(--primary);
    border-radius: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.07rem;
`;

export const InputGroup = styled.div`
    width: 20rem;
    background: var(--dark-blue);
    border-radius: 5.6rem;
    display: flex;

    padding: 0.5rem 1.2rem;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: vaR(--white);
`;
export const Nav = styled.div`
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    a,
    button {
        margin: 1rem 0;
        font-size: 0.8rem;
    }

    button {
        width: 100%;
        padding: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5.6rem;
        background: none;
        border: 1px solid white;
        color: var(--white);
        .icon {
            margin-right: 0.5rem;
        }
    }

    .button-active {
        background: var(--primary);
        font-weight: bold;
        border: none;
    }
`;

export const Logo = styled.img``;

export const IconSearch = styled.img``;
