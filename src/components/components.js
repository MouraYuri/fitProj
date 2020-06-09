import React from 'react';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    flex: 1
    flex-direction: column
    background-color: #0f0e0e
    align-items: center
`

export const Container2 = (props) => {
    return(
        <LinearGradient colors={['#02010a', '#17161a']}
        style={{
            flex:1,
            flexDirection: 'column',
            alignItems:'center'
        }}>
            {props.children}
        </LinearGradient>
    )
}