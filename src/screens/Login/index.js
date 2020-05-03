import React from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
//import get from '../../services/request';
import {styles} from './styles';




const LoginScreen = () => {
    
    const backgroudImgPath = "../../assets/loginBackground.jpg"


    return (
        <View style={styles.mainView}>
            
            <ImageBackground source={require(backgroudImgPath)} style={styles.backgroundImg}>

                <View style={styles.loginSpace}>

                    <Text style={styles.loginTextStyle}>Log In</Text>
                    

                    <TextInput style={styles.textInputStyle} placeholder='Email' placeholderTextColor='#363434'/>

                    <TextInput style={styles.textInputStyle} placeholder='Password' placeholderTextColor='#363434'/>

                    <View style={styles.buttonsLoginArea}>
                        <TouchableOpacity style={styles.buttonsStyle}
                        onPress={() => Alert.alert('pressed')}>

                            <Text style={styles.buttonsTextStyle}>Enter</Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={styles.buttonsStyle}>

                            <Text style={styles.buttonsTextStyle}>Register</Text>

                        </TouchableOpacity>

                        
                    </View>



                </View>


            </ImageBackground>
            
            



        </View>
    )
}


export default LoginScreen;