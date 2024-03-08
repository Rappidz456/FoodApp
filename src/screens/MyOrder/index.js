import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const OrderPlace = () => {

    const route = useRoute();
    const {data} = route.params
    const info = [];
    info.push(data);

    const render = ({item}) => {
        return(
            <View style = {styles.itemSelected}>
                <Image source={item.image}/>
                <View style = {{flexDirection: 'row'}}>
                <Text style = {{color: 'white', }}>{item.rec}</Text>
                <Text>{item.amount}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#32373d', '#0e0f13', '#0e0f13']} useAngle={true} angle={180} style={{ height: 1500 }}>
                <View>
                    <FlatList renderItem={render}
                    data={info}
                    keyExtractor={item => item.num}/>
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
    itemSelected: {
        alignSelf: 'center',
        top: 40,
        borderColor: 'grey',
        backgroundColor: 'grey',
        width: 200,
        height: 100,
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
