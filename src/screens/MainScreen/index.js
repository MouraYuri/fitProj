import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


import { Container } from '../../components/components';

import {
    WelcomeText,
    GoalText,
    GoalContainer,
    GoalContainerStyle
} from './styles';



const MainScreen = () => {


    return (
        <Container>

            <WelcomeText>Hello, User.</WelcomeText>

            <GoalText>Your current goal:</GoalText>

            <LinearGradient 
                colors={["#474747","#949494"]}
                style={GoalContainerStyle}
                start={{x:1, y:1}}
                end={{x:0,y:0}}
            >

            </LinearGradient>

        </Container>
    )

}

export default MainScreen;