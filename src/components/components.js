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
        backgroundColor: "#FFFFFF",
        marginHorizontal: '5%',
        marginVertical: '5%',
        flexDirection:'column',
        alignItems: 'center',
        borderRadius: 11
    }

    const imageStyle = {
        width: 89,
        height: 86,
    }

    return (
        <View style={itemStyle}>

            <Text>{props.item.title}</Text>

            <Image
                source={require(srcPath)}
                resizeMode={'center'}
                style={imageStyle}
            />

        </View>
    )
}