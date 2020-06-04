import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen/index';
import Login from '../screens/Login/index';


const Stack = createStackNavigator()


const Routes = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name={"LoginScreen"}
                    component={Login}
                />

                <Stack.Screen name={"MainScreen"}
                    component={MainScreen}
                />
            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default Routes;