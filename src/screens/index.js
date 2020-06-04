import React from 'react';

import { View,Text, StatusBar } from 'react-native';

import LoginScreen from './Login/index';
import MainScreen from './MainScreen/index'

import Routes from '../routes/routes';


export default function App(){

    return (
        <>
        <StatusBar backgroundColor='#919191'/>
        <Routes/>
        </>
    )

}