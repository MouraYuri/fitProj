import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    SafeAreaView,
    Alert
} from 'react-native';

import { Container, Item } from '../../components/components';

import {
    WelcomeText,
    GoalPresentationText,
    GoalContainer,
    GoalAchievementIcon,
    MenuContainer,
    MenuText,
    Header,
    IconCircleContainer,
    GoalTitleText,
    GoalDateText,
    LogoutButton,
    LogoutIconStyle
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

    let goal = "Lose weight";
    let timebox = "Started: 10/06\nEndline: 12/08";


    return (
        <Container>

            <Header>
                <LogoutButton onPress={()=> Alert.alert('logout..')}>
                    <Image
                    source={require('../../assets/icons/logout.png')}
                    style={LogoutIconStyle}
                    resizeMode={'center'}
                    />
                </LogoutButton>
            </Header>

            <WelcomeText>Hello, User.</WelcomeText>

            <GoalPresentationText>Your current goal:</GoalPresentationText>


            <GoalContainer>

                <IconCircleContainer>

                    <Image
                        source={require('../../assets/icons/trophy.png')}
                        style={GoalAchievementIcon}
                        resizeMode={'center'}
                    />

                </IconCircleContainer>

                <GoalTitleText>{goal}</GoalTitleText>

                <GoalDateText>{timebox}</GoalDateText>



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