import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderPlace = () => {
    const data = [
        {
            id: 1,
            name: 'Steak',
            price: '$20'
        },
        {
            id: 2,
            name: 'Food',
            price: '$17',
        },
        {
            id: 3,
            name: 'Recipe',
            price: '$90'
        }
    ]

    const ItemTotal = [
        {
            id: 1,
            total: 'Item Total'
        },
        {
            id: 2,
            deliver: 'Delivery Charges',
        },
        {
            id: 3,
            cost: 'Total'
        }
    ]

    const rightSwipeActions = () => {
        return (
          <View
            style={{
              backgroundColor: '#16171b',
              height: 100,
              borderColor: 'grey',
              borderWidth: 1,
              width: 90,
              marginHorizontal: -5,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <MaterialCommunityIcons name='delete' size={40} color={'#dd5800'}/>
          </View>
        );
      };

      const listPrice = ({item}) => {
        return(
            <View style = {styles.priceTextView}>
                <Text style = {styles.priceText1}>{item.total}</Text>
                <Text style = {styles.priceText1}>{item.deliver}</Text>
                <Text style = {styles.priceText1}>{item.cost}</Text>
            </View>
        )
      }

    const Separator = () => <View style={styles.itemSeparator} />;

    
    const ListItem = ({item}) => (
        <Swipeable renderRightActions={rightSwipeActions}>
            <View style = {styles.itemContainer}>
                    <Image source={require('../../assets/images/download.jpg')} style = {styles.imageStyle}/>
                    <View style = {styles.flexStyle}>
                        <Text style = {styles.itemStyle}>{item.name}</Text>
                        <Text style = {styles.itemStyle2}>{item.price}</Text>
                    </View>
                </View>
        </Swipeable>
    )
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#32373d', '#0e0f13', '#0e0f13']} useAngle={true} 
            angle={180} style={{ height: 1500 }}>
                <View style = {{marginVertical: 50}}>
                <FlatList data={data}
                renderItem={ListItem}
                keyExtractor={item => item.id}/>
                </View>
                <View style = {styles.bottomSheet}>
                    <View style = {styles.priceContainer}>
                        <FlatList renderItem={listPrice}
                        data={ItemTotal}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={Separator}/>
                    </View>
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
    },
    itemSeparator:{
        height: 1,
        backgroundColor: 'white'
    },
    itemContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#16171b',
        borderColor: 'grey',
        borderWidth: 1,
        width: 350,
        height: 100,
        alignSelf: 'center',
        borderRadius: 10
    },
    priceContainer: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        top: 30
    },
    priceTextView: {
        gap: -18,
        marginVertical: 10,
    },
    priceText1:{
        fontFamily: 'Poppins-Light',
        color: 'white'
    },
    flexStyle : {
        flexDirection: 'column',
        marginHorizontal: 25,
    },
    imageStyle: {
        top: 5,
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 15
    },
    itemStyle: {
        color: 'white',
        fontSize: 20,
        marginVertical: 7,
        fontFamily: 'Poppins-Bold'
    },
    itemStyle2: {
        color: 'white',
        fontSize: 20,
        marginVertical: 5,
        fontFamily: 'Poppins-Bold'
    },  
    bottomSheet: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        borderTopLeftRadius : 35,
        borderTopRightRadius : 35,
        height: 230,
        width: 350,
        backgroundColor: '#353a40',
    },
    checkOutView: {
        alignSelf: 'center',
        top: -45
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
