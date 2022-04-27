import styled from 'styled-components';

export const Border = styled.div`
    max-width: 20rem;
    background: var(--primary);
    border-radius: 2.2rem;
    padding: 0.1rem;

    @media (max-width: 1430px) {
        width: 100%;
    }
`;

export const Container = styled.div`
    max-width: 20rem;
    border-radius: 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 1rem;
    background-color: var(--dark-blue);
`;
export const BackgroundImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const User = styled.img`
    position: absolute;
    bottom: 38%;
`;

export const Text = styled.div`
    margin-top: 3rem;
    color: var(--white);
    h1 {
        display: flex;
        font-size: 1.2rem;

        img {
            margin-left: 0.5rem;
        }
    }

    h2 {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        font-weight: 400;

        span {
            margin-left: 0.2rem;
            background: var(--primary);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    p {
        font-size: 0.9rem;
        text-align: justify;
        line-height: 1.25rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
