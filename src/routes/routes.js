import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen/index';
import Login from '../screens/Login/index';
import LetsDoIt from '../screens/LetsDoIt/index';


const Stack = createStackNavigator()

    let firstScreenToAppear = LetsDoIt;


const Routes = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{
                headerShown:false
                }}>
                <Stack.Screen name={"LoginScreen"}
                    component={firstScreenToAppear}
                />

                <Stack.Screen name={"MainScreen"}
                    component={MainScreen}
                />
            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default Routes;