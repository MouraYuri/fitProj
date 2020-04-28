import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


const LoginScreen = () => {


    return (
        <View style={styles.mainView}>
            <View style={styles.loginSpace}>

                <TextInput style={styles.textInputStyle} placeholder='Type you email'/>

                <TextInput style={styles.textInputStyle} placeholder='Type you password'/>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    textInputStyle: {
        borderColor: 'black',
        backgroundColor: '#c4c8cf',
        borderRadius: 16,
        width: '80%',
        

    },


    loginSpace: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 2/6,
        width: '100%',
        justifyContent: 'space-around',
    }



})

export default LoginScreen;