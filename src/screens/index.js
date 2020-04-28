import React from 'react';

import { View,Text, StatusBar } from 'react-native';

import LoginScreen from './loginScreen';


export default function App(){

    return (
        <>
        <StatusBar backgroundColor='#919191'/>
        <LoginScreen/>
        </>
    )

}