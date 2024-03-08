import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tvscreenMain: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 160,
        borderBottomRightRadius: 160,
        alignSelf: 'center',
        backgroundColor: "#353a40",
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 5,
    },
    headerFoodView: {
        marginVertical: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foodName: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        letterSpacing: 1
    },
    amountView: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    amountNumber: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageFood: {
        borderRadius: 120,
        height: 235,
    },
    incrementView: {
        flexDirection: 'row'
    },
    buttonFlex: {
        flexDirection: 'row',
        marginVertical: 40,
        borderWidth: 2,
        width: 120,
        alignSelf: 'center',
        borderColor: '#444648',
        borderRadius: 9
    },
    buttonView: {
        width: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderColor: 'grey',
    },
    buttonView2: {
        width: 40,
        left: 23,
        borderColor: 'white',
        borderWidth: 0.9,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderColor: 'grey',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    incrementText: {
        fontSize: 19,
        left: 12,
        color: 'white'
    },
    flexText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginText1: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    marginText2: {
        marginHorizontal: 45,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    marginText3: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    AddButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
    AddFood: {
        width: 160,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6600',
        borderRadius: 20
    },
    cartText: {
        color: '#fdede0',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18
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
});
