import { StyleSheet } from 'react-native';


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
        opacity: .6,
        

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
        width: '40%',
        height: '63%',
        alignItems: 'center',
        borderRadius: 16,
        justifyContent: 'center',
        

    },
    buttonsLoginArea: {
        //backgroundColor: 'red',
        flex: 2/6,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }



})

export { styles };