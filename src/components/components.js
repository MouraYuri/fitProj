import React from 'react';
import styled from 'styled-components/native';

import {
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import GoalContainerStyle from '../screens/MainScreen/styles';


export const Container = (props) => {
    return(
        <LinearGradient colors={['#02010a', '#424242']}
        style={{
            flex:1,
            flexDirection: 'column',
            alignItems:'center'
        }}>
            {props.children}
        </LinearGradient>
    )
}

export const Item = (props)=> {

    const srcPath =  props.item.src;

    const itemStyle = {
        flex:1,
        backgroundColor: "#c4c4c4",
        marginHorizontal: '5%',
        marginTop:'5%',
        flexDirection:'column',
        alignItems: 'center',
        borderRadius: 11,
        height:130,
        width: 100,
        borderColor:'#B91212',
        borderWidth: 2,

    }

    const imageStyle = {
        width: 75,
        height: 86,
    }

    const textStyle = {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop:'5%'
    }

    return (
        <TouchableOpacity 
            style={itemStyle}
        >

            <Text style={textStyle}>{props.item.title}</Text>

            <Image
                source={{
                    uri: props.item.src
                }}
                resizeMode={'center'}
                style={imageStyle}
            />

        </TouchableOpacity>
    )
}