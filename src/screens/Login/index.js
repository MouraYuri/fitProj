import React from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
//import get from '../../services/request';
import {styles} from './styles';




const LoginScreen = ( {navigation}) => {
    
    const backgroudImgPath = "../../assets/loginBackground.jpg"


    return (
        <View style={styles.mainView}>
            
            <ImageBackground source={require(backgroudImgPath)} style={styles.backgroundImg}>

                <KeyboardAvoidingView style={styles.loginSpace} enabled={true} behavior={'padding'}>

                    <Text style={styles.loginTextStyle}>Log In</Text>
                    

                    <TextInput style={styles.textInputStyle} placeholder='Email' placeholderTextColor='#363434'/>

                    <TextInput style={styles.textInputStyle} placeholder='Password' placeholderTextColor='#363434'/>

                    <KeyboardAvoidingView
                        style={styles.buttonsLoginArea} enabled={false}>
                        <TouchableOpacity style={styles.buttonsStyle}
                        onPress={() => navigation.navigate('MainScreen')}>

                            <Text style={styles.buttonsTextStyle}>Enter</Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={styles.buttonsStyle}>

                            <Text style={styles.buttonsTextStyle}>Register</Text>

                        </TouchableOpacity>

                        
                    </KeyboardAvoidingView>



                </KeyboardAvoidingView>


            </ImageBackground>
            
            



        </View>
    )
}


export default LoginScreen;