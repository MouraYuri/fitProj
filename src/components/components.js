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
import { TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';


export const Container = (props) => {
    return(
        <View
        style={{
            backgroundColor: 'black',
            flex:1,
            flexDirection: 'column',
            alignItems:'center'
        }}>
            {props.children}
        </View>
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

export const Header = (props) => {
    const HeaderStyle = {
        flexDirection: 'row',
        backgroundColor: "#0F0FAF",
        width: '100%',
        height: '10%',
        marginTop: '5%',
        alignItems: 'center'
    }

    const BackButtonTouchableStyle = {
        width: '20%',
        height: '80%',
        marginLeft: '5%',
        alignSelf: 'flex-start',
        //backgroundColor: '#BFCCC0',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const BackButtonIconStyle = {
        width: 200,
        height:'100%'
    }

    return(
        <View
            style={HeaderStyle}
        >
            <TouchableHighlight
                style={BackButtonTouchableStyle}
                onPress={() => console.log('back-button!!')}
            >
                <Image
                        source={require('../assets/icons/back.png')}
                        style={BackButtonIconStyle}
                        resizeMode={'center'}
                />

            </TouchableHighlight>


            {props.children}
        </View>
    )
}