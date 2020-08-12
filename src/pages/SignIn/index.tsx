import React from 'react';
import { Image } from 'react-native';

import { Container } from './style';
import logoImg from './../../assets/logo.png';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Image source={logoImg} />
        </Container>
    );
}

export default SignIn;