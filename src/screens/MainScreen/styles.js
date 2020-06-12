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
    z-index: 1
    
`


export const GoalContainer = styled.View`
    background-color: #ACAAAA
    width: 80%
    height: 20%
    margin-top: 3%
    border-radius: 11px
    z-index: 1
    flex-direction: row
    align-items: center
    
`

export const GoalAchievementIcon = {
    width: '60%',
    height: '90%',
    marginTop:'10%',
    margin: '5%'
}

export const MenuText = styled.Text`
    color: #FFFFFF
    font-weight: 700
    font-size: 24px
    margin-top: 3%
`

export const Header = styled.View`
    background-color: #B91212
    z-index: 0
    width: 100%
    height: 205px
    position: absolute
    border-bottom-left-radius: 11px
    border-bottom-right-radius: 11px

`

export const IconCircleContainer = styled.View`
    position: absolute
    z-index: 0
    border-radius: 50px
    background-color: #D8D8D8
    width: 30%
    height: 75%
    flex-direction: column
    align-items: center
    justify-content: center
    margin-left: 5%
`