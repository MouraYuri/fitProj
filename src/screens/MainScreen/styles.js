import React from 'react';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const WelcomeText = styled.Text`
    color: #FFFFFF
    font-size: 36px
    font-weight: bold
    align-self: flex-start
    margin-top: 7%
    margin-left: 10%
`

export const GoalText = styled.Text`
    color: #FFFFFF
    font-size: 24px
    align-self: flex-start
    margin-left: 10%
    margin-top: 6%
    font-weight: 600
`

export const MenuContainer = styled.View`
    flex-direction: column
    margin-horizontal: 20%
    width:95%
    height:50%
    
`

export const GoalContainerStyle = {
    width: '80%',
    height: "20%",
    marginTop: '3%',
    borderRadius: 11
}

export const GoalAchievementIcon = {
    width: '25%',
    height: '50%',
    marginTop:'10%',
    margin: '5%'
}

export const MenuText = styled.Text`
    color: #FFFFFF
    font-weight: 700
    font-size: 24px
    margin-top: 3%
`

// export const Header = styled.View`
//     background-color: #B91212

// `