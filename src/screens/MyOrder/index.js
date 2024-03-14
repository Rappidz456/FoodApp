import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles';
import { verticalScale } from '../../utils/ScaleSize';

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
            total: 'Item Total',
            amount: '$90'
        },
        {
            id: 2,
            deliver: 'Delivery Charges',
        },
        {
            id: 3,
            discount: 'Offer Discount'
        },
        {
            id: 4,
            cost: 'Total'
        }
    ]

    const rightSwipeActions = () => {
        return (
          <View
            style= {styles.swipeStyle}>
            <MaterialCommunityIcons name='delete' size={40} color={'#dd5800'}/>
          </View>
        );
      };

      const listPrice = ({item}) => {
        return(
            <View style = {styles.priceTextView}>
                <Text style = {styles.priceText1}>{item.total}</Text>
                <Text style = {styles.priceText1}>{item.deliver}</Text>
                <Text style = {styles.discountStyle}>{item.discount}</Text>
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
                <View style = {{marginVertical: verticalScale(70)}}>
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

export default OrderPlace;
