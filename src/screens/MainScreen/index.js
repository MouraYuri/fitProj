import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    SafeAreaView
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


import { Container, Item } from '../../components/components';

import {
    WelcomeText,
    GoalText,
    GoalContainer,
    GoalAchievementIcon,
    MenuContainer,
    MenuText,
    Header
} from './styles';


const MainScreen = () => {

    const data = [
        {
            id:'0',
            title: "Let's do it",
            src: "letsdoit"
        },
        {
            id:'1',
            title: "Statistics",
            src: "statistics"
        },
        {
            id:'2',
            title: "Schedule",
            src: "calendar"
        },
        {
            id:'3',
            title: "Music",
            src: "headphones"
        }
    ]


    return (
        <Container>

            <Header/>

            <WelcomeText>Hello, User.</WelcomeText>

            <GoalText>Your current goal:</GoalText>


            <GoalContainer>
                <Image
                    source={require('../../assets/icons/trophy.png')}
                    style={GoalAchievementIcon}
                    resizeMode={'center'}
                />


            </GoalContainer>

            <MenuText>Menu</MenuText>

            <MenuContainer>

                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Item item={item}/>}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </SafeAreaView>

            </MenuContainer>


        </Container>
    )

}

export default MainScreen;