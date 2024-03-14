import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { horizontalScale, verticalScale } from "../../utils/ScaleSize";
import {responsiveHeight as height, responsiveScreenWidth as width} from 'react-native-responsive-dimensions'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tvscreenMain: {
        width: wp('100%'),
        height: hp('30%'),
        borderBottomLeftRadius: 170,
        borderBottomRightRadius: 170,
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
        top: verticalScale(17),
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
        top: verticalScale(35),
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
        top: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageFood: {
        borderRadius: 120,
        height: height(25),
        width: width(45)
    },
    incrementView: {
        top: verticalScale(10),
        flexDirection: 'row'
    },
    buttonFlex: {
        flexDirection: 'row',
        top: verticalScale(80),
        borderWidth: 2,
        width: width(30),
        alignSelf: 'center',
        borderColor: '#444648',
        borderRadius: 9
    },
    buttonView: {
        width: width(10),
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
        marginTop: verticalScale(120),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginText1: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },
    marginText2: {
        marginHorizontal: horizontalScale(30),
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },
    marginText3: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },
    AddButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
        top: verticalScale(40)
    },
    AddFood: {
        width: width(40),
        height: height(6.5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6600',
        borderRadius: 20
    },
    cartText: {
        color: '#fdede0',
        fontFamily: 'Poppins-Medium',
        fontSize: 18
    },
    foodItemsView: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(110),
        borderWidth: 1,
        borderColor: '#515558',
        borderRadius: 7,
        width: wp('24.5%'),
        height: hp('17%'),
        backgroundColor: '#353a40',
    },
    imageStyle: {
        alignSelf: 'center',
        bottom: verticalScale(40),
        width: wp('17%'),
        height: hp('10%'),
        borderRadius: 60
    },
    heartIcon: {
        alignSelf: 'flex-end',
        bottom: horizontalScale(17),
        marginRight: horizontalScale(10),
    },
    foodNameView: {
        color: 'white',
        bottom: verticalScale(24),
        fontFamily: 'Poppins-Regular',
        fontSize: 11,
        marginLeft: horizontalScale(10)
    },
    dollarText: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        bottom: verticalScale(15),
        marginLeft: horizontalScale(10)
    },
});
