import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { verticalScale, horizontalScale } from '../../utils/ScaleSize';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemSeparator: {
        height: 1,
        width: wp('74%'),
        backgroundColor: 'grey'
    },
    itemContainer: {
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        backgroundColor: '#16171b',
        borderColor: 'grey',
        borderWidth: 1,
        width: wp('80%'),
        height: hp('12%'),
        alignSelf: 'center',
        borderRadius: 10
    },
    increment: {
        borderWidth: 2,
        height: hp('10%'),
        borderColor: '#38373a',
        width: wp('6%'),
        marginLeft: horizontalScale(105),
        borderRadius: 5,
        marginTop: verticalScale(7)
    },
    incrementStyle1: {
        color: '#7f7f7f',
        textAlign: 'center',
        fontSize: 15,
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: '#38373a',
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    numberStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    incrementStyle2: {
        color: '#7f7f7f',
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 2,
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: '#38373a'
    },
    priceContainer: {
        alignSelf: 'flex-start',
        marginLeft: horizontalScale(20),
        top: verticalScale(40)
    },
    priceTextView: {
        gap: -20,
        marginVertical: verticalScale(11),
    },
    priceText1: {
        fontFamily: 'Poppins-Light',
        color: 'white',
    },
    discountStyle: {
        fontFamily: 'Poppins-Light',
        color: 'white'
    },
    flexStyle: {
        flexDirection: 'column',
        marginHorizontal: horizontalScale(25),
    },
    imageStyle: {
        top: verticalScale(11),
        width: wp('15%'),
        height: hp('9%'),
        borderRadius: 50,
        marginLeft: horizontalScale(17)
    },
    itemStyle: {
        color: 'white',
        fontSize: 17,
        marginVertical: verticalScale(7),
        fontFamily: 'Poppins-Bold'
    },
    itemStyle2: {
        color: 'white',
        fontSize: 17,
        marginVertical: verticalScale(10),
        fontFamily: 'Poppins-Bold'
    },
    bottomSheet: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        height: hp('40%'),
        width: wp('84%'),
        backgroundColor: '#353a40',
    },
    checkOutView: {
        alignSelf: 'center',
        bottom: verticalScale(55)
    },
    checkOutButton: {
        backgroundColor: '#dd5800',
        width: wp('50%'),
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    btnText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: 'white'
    },
    swipeStyle: {
        backgroundColor: '#16171b',
        height: hp('12%'),
        borderColor: 'grey',
        borderWidth: 1,
        width: wp('17%'),
        marginHorizontal: horizontalScale(-5),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    chargesStyle: {
        marginLeft: horizontalScale(205), 
        color: 'white', 
        fontFamily: 'Poppins-SemiBold'
    },
    discountcharges: {
        marginLeft: horizontalScale(157), 
        color: 'white', 
        fontFamily: 'Poppins-SemiBold',
    },
    discountpay: {
        marginLeft: horizontalScale(177), 
        color: 'white', 
        fontFamily: 'Poppins-SemiBold',
    },
    totalcost: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        marginLeft: horizontalScale(245)
    }
});