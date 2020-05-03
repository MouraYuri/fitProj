import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';



import styles from './style'

const Button = () => {

    return (
            <View style={{backgroundColor: 'white', height: '30%', width:'100%'}}>

                <TouchableOpacity onPress={() => Alert.alert('pressed')} style={styles.ButtonsStyle}>


                </TouchableOpacity>


            </View>
    )
}

export default Button;