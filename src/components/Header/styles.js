import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31, 29, 43, 0.12);
    backdrop-filter: blur(45px);
    z-index: 9999;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 1.5rem;
`;
export const Menu = styled.nav`
    width: 1440px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0.5rem;

    .menu-icon {
        fill: var(--white);
        cursor: pointer;
        display: none;
        @media (max-width: 740px) {
            display: inline-block;
        }
    }
`;

export const Group = styled.div`
    width: 28rem;
    background: var(--primary);
    border-radius: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.07rem;
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const InputGroup = styled.div`
    width: 28rem;
    background: var(--dark-blue);
    border-radius: 5.6rem;
    display: flex;

    padding: 0.5rem 1.2rem;
    align-items: center;

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const Input = styled.input`
    width: 100%;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: vaR(--white);

    ::placeholder {
        color: var(--white);
        opacity: 0.5;
    }
`;
export const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 740px) {
        display: none;
    }

    a,
    button {
        margin: 0 1rem;
        font-size: 0.8rem;
    }

    button {
        width: 6rem;
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
        width: 12rem;
        background: var(--primary);
        font-weight: bold;
        border: none;
    }
`;

export const Logo = styled.img``;

export const IconSearch = styled.img``;
