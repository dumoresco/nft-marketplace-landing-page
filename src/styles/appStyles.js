import styled from 'styled-components';

export const HiddenGames = styled.div`
    width: 1440px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 2.25rem;
    font-weight: 700;
`;

export const CardContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1430px) {
        flex-direction: column;
    }
`;
