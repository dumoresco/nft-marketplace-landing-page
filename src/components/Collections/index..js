import React from 'react';

import verified from '../../assets/verified-icon.png';
import { Container, BackgroundImg, User, Text, Border } from './styles';

function Collections(props) {
    return (
        <Border>
            <Container>
                <BackgroundImg src={props.imageUrl} alt="NTF Image" />
                <User src={props.userUrl} />
                <Text>
                    <h1>
                        {props.name}
                        <img src={verified} alt="Verified icon" />
                    </h1>
                    <h2>
                        Created by
                        <span>{props.username}</span>
                    </h2>
                    <p>{props.description}</p>
                </Text>
            </Container>
        </Border>
    );
}

export default Collections;
