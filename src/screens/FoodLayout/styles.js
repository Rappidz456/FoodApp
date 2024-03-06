import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353a40',
    },
    iconView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        top: 20
    },
    fontIcon: {
        height: 20, 
        width: 50, 
        marginHorizontal: 120
    },
    inputView: {
        flexDirection: 'row',
        marginVertical: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput: {
        marginHorizontal: 5,
        borderColor: 'white',
        borderWidth: 0.7,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        width: 270,
        fontFamily: 'Poppins-Light',
        height: 45
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: '#fb6602',
        backgroundColor: '#fb6602',
        borderRadius: 6,
        width: 45,
        height: 45
    },
    textView: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        marginLeft: 30,
        top: 40
    },
    popularView: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        marginLeft: 30,
        bottom: 40
    },
    foodItemsView: {
        marginHorizontal: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: '#4c4d51',
        borderRadius: 7,
        width: 160,
        height: 200,
        backgroundColor: '#16171b',
    },
    imageStyle: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 60
    },
    heartIcon: {
        alignSelf: 'flex-end',
        marginRight: 15,
        top: 10
    },
    foodNameView: {
        color: 'white',
        textAlign: 'center',
        top: 10,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    dollarText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        marginTop: 20,
        marginLeft: 10
    },
    btnPlus: {
        alignSelf: 'flex-end',
        backgroundColor: '#fb6602',
        borderRadius: 35,
        bottom: 27,
        marginRight: 10,
        width: 25, height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatelist: {
        bottom: 20,
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})

export default styles;