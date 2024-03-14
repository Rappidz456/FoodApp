import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { horizontalScale, verticalScale } from "../../utils/ScaleSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        top: verticalScale(27),
        marginLeft: horizontalScale(15)
    },
    fontIcon: {
        height: hp('3%'), 
        width: wp('14%'), 
        marginHorizontal: horizontalScale(130)
    },
    inputView: {
        flexDirection: 'row',
        marginVertical: verticalScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput: {
        marginHorizontal: horizontalScale(5),
        borderColor: 'white',
        borderWidth: 0.7,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        width: wp('68%'),
        fontFamily: 'Poppins-Light',
        height: hp('6.5%')
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: horizontalScale(10),
        borderColor: '#fb6602',
        backgroundColor: '#fb6602',
        borderRadius: 6,
        width: wp('12%'),
        height: hp('6.5%')
    },
    textView: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 22,
        marginLeft: horizontalScale(30),
        top: verticalScale(50)
    },
    popularView: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        marginLeft: horizontalScale(35),
        bottom: verticalScale(42)
    },
    foodItemsView: {
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(8),
        borderWidth: 1,
        borderColor: '#27282d',
        borderRadius: 7,
        width: wp('37%'),
        height: hp('25%'),
        backgroundColor: '#16171b',
    },
    imageStyle: {
        alignSelf: 'center',
        width: wp('18%'),
        height: hp('10%'),
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
        top: verticalScale(20),
        fontFamily: 'Poppins-Regular',
        fontSize: 15
    },
    dollarText: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        marginTop: verticalScale(35),
        marginLeft: horizontalScale(14)
    },
    btnPlus: {
        alignSelf: 'flex-end',
        backgroundColor: '#fb6602',
        borderRadius: 35,
        bottom: horizontalScale(26),
        marginRight: horizontalScale(13),
        width: wp('5%'), 
        height: hp('3%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatelist: {
        bottom: verticalScale(34),
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})

export default styles;