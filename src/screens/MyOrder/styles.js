import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { verticalScale, horizontalScale } from '../../utils/ScaleSize';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemSeparator: {
        height: 0.6,
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
    priceContainer: {
        alignSelf: 'flex-start',
        marginLeft: horizontalScale(20),
        top: 30
    },
    priceTextView: {
        gap: -18,
        marginVertical: verticalScale(14),
    },
    priceText1: {
        fontFamily: 'Poppins-Light',
        color: 'white'
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
        fontFamily: 'Poppins-Medium'
    },
    itemStyle2: {
        color: 'white',
        fontSize: 17,
        marginVertical: verticalScale(10),
        fontFamily: 'Poppins-Medium'
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
    }
});