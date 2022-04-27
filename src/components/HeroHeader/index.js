import React from 'react';

import { Container, Text, Buttons } from './styles';

import background from '../../assets/background-image.png';
function HeroHeader() {
    return (
        <Container>
            <Text>
                <h2>Exclusive NFT for Digital and Real-world Assets</h2>
                <h1>
                    The world's first non-fungible token (NFT) marketplace for
                    both digital and physical assets.
                </h1>
                <Buttons>
                    <button>Explore</button>
                    <button className="button-active">Create</button>
                </Buttons>
            </Text>
        </Container>
    );
}

export default HeroHeader;
