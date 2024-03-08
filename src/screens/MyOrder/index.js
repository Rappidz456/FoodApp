import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OrderPlace = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#32373d', '#0e0f13', '#0e0f13']} useAngle={true} angle={180} style={{ height: 1500 }}>
                <View>
                    
                </View>
                <View style = {styles.bottomSheet}>
                    <View style = {styles.checkOutView}>
                        <TouchableOpacity style = {styles.checkOutButton}>
                            <Text style = {styles.btnText}>CheckOut</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    bottomSheet: {
        alignSelf: 'center',
        top: 350,
        borderTopLeftRadius : 35,
        borderTopRightRadius : 35,
        height: 390,
        width: 350,
        backgroundColor: '#353a40',
    },
    checkOutView: {
        alignItems: 'center',
        top: 260
    },
    checkOutButton: {
        backgroundColor: '#dd5800',
        width: 200,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    btnText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: 'white'
    }
});

export default OrderPlace;
