import React from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


const LoginScreen = () => {


    return (
        <View style={styles.mainView}>
            
            <ImageBackground source={require('../assets/loginBackground.jpg')} style={styles.backgroundImg}>

                <View style={styles.loginSpace}>

                    <Text style={styles.loginTextStyle}>Log In</Text>

                    <TextInput style={styles.textInputStyle} placeholder='Type you email'/>

                    <TextInput style={styles.textInputStyle} placeholder='Type you password'/>

                    <TouchableOpacity style={styles.buttonsStyle}>

                        <Text style={styles.buttonsTextStyle}>Enter</Text>

                    </TouchableOpacity>

                </View>


            </ImageBackground>
            
            



        </View>
    )
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },

    textInputStyle: {
        borderColor: 'black',
        backgroundColor: '#c4c8cf',
        borderRadius: 16,
        width: '80%',
        opacity: .6

    },


    loginSpace: {
        alignItems: 'center',
        //backgroundColor: 'black',
        flex: 3/6,
        width: '100%',
        justifyContent: 'space-around',
    },

    backgroundImg: {
        flex: 1,
        flexDirection: 'column-reverse',
        width: '100%',
        alignItems: 'center',
        

    },

    loginTextStyle: {
        color: 'white',
        fontSize: 28,
        textAlign: 'left',
        width: '80%',
        paddingLeft: '2%', 
        fontWeight: 'bold'
    }, 

    buttonsTextStyle: {
        color: 'white',


    },

    buttonsStyle: {
        backgroundColor: '#919191',
        width: '25%',
        height: '12%',
        alignItems: 'center',
        borderRadius: 16,
        

    }



})

export default LoginScreen;