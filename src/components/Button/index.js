import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';


const Button = (props) => {

    const ret = () => {
        Alert.alert("Button Pressed")
    }

    return (
                <TouchableOpacity onPress={ret} style={styles.ButtonsStyle} >

                    <Text style={styles.ButtonTextStyle}> {props.text} </Text>

                </TouchableOpacity>
    )
}

const styles = {    
    ButtonsStyle: {
        backgroundColor: '#919191',
        width: '40%',
        height: '63%',
        alignItems: 'center',
        borderRadius: 16,
        justifyContent: 'center',

    },

    ButtonTextStyle: {
        color: 'white'
    }
}


export default Button;