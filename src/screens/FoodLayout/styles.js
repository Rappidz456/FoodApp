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
        top: verticalScale(27)
    },
    fontIcon: {
        height: hp('3%'), 
        width: wp('14%'), 
        marginHorizontal: horizontalScale(130)
    },
    inputView: {
        flexDirection: 'row',
        marginVertical: verticalScale(80),
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
        height: hp('6.9%')
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: horizontalScale(10),
        borderColor: '#fb6602',
        backgroundColor: '#fb6602',
        borderRadius: 6,
        width: wp('12%'),
        height: hp('7%')
    },
    textView: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        marginLeft: horizontalScale(35),
        top: verticalScale(50)
    },
    popularView: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        marginLeft: horizontalScale(35),
        bottom: verticalScale(42)
    },
    foodItemsView: {
        marginHorizontal: horizontalScale(15),
        marginVertical: verticalScale(8),
        marginBottom: verticalScale(10),
        borderWidth: 1,
        borderColor: '#4c4d51',
        borderRadius: 7,
        width: wp('39%'),
        height: hp('28%'),
        backgroundColor: '#16171b',
    },
    imageStyle: {
        alignSelf: 'center',
        width: wp('24%'),
        height: hp('14%'),
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
        top: verticalScale(15),
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    dollarText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        marginTop: verticalScale(25),
        marginLeft: horizontalScale(14)
    },
    btnPlus: {
        alignSelf: 'flex-end',
        backgroundColor: '#fb6602',
        borderRadius: 35,
        bottom: horizontalScale(27),
        marginRight: horizontalScale(13),
        width: wp('6%'), 
        height: hp('3.6%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatelist: {
        bottom: verticalScale(27),
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})

export default styles;