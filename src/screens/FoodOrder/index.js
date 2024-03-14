import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Order = ({ navigation }) => {

    const foodObjects = [
        {
            id: 1,
            label: 'FoodItems',
            dollar: '$15',
            image: require('../../assets/images/download.jpg')
        },

        {
            id: 2,
            label: 'Kacch Biryani',
            dollar: '$20',
            image: require('../../assets/images/download.jpg')
        },
        {
            id: 3,
            label: 'Kacch Biryani',
            dollar: '$25',
            image: require('../../assets/images/download.jpg')
        },
    ]

    const render = ({ item }) => {
        return (
            <View style={styles.foodItemsView}>
                <Pressable onPress={() => {
                    navigation.navigate('FoodOrder', {
                        Id: item.id,
                        name: item.label,
                        amount: item.dollar,
                        picture: item.image
                    })
                }}>
                    <Image source={item.image} style={styles.imageStyle} />
                    <Text style={styles.foodNameView}>{item.label}</Text>
                    <Text style={styles.dollarText}>{item.dollar}</Text>
                    <AntDesign name={'heart'} color={'red'} size={13} style={styles.heartIcon} />
                </Pressable>
            </View>
        )
    }

    const route = useRoute();
    const { name, amount, picture } = route.params

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#32373d', '#0e0f13', '#0e0f13']} useAngle={true} angle={180}
                style={{ height: 1500 }}>
                <View style={styles.tvscreenMain}>

                    <View style={styles.headerFoodView}>
                        <Text style={styles.foodName}>{name}</Text>
                    </View>

                    <View style={styles.amountView}>
                        <Text style={styles.amountNumber}>{amount}</Text>
                    </View>

                    <View style={styles.imageView}>
                        <Image source={picture} style={styles.imageFood} />
                    </View>

                    <View style={styles.buttonFlex}>
                        <TouchableOpacity style={styles.buttonView}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.incrementText}>1</Text>
                        <TouchableOpacity style={styles.buttonView2}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexText}>
                        <Text style={styles.marginText1}>% 12 Alc</Text>
                        <Text style={styles.marginText2}>& 80 Kalaries</Text>
                        <Text style={styles.marginText3}>700 milintress</Text>
                    </View>

                    <View style={styles.AddButtonView}>
                        <TouchableOpacity style={styles.AddFood} onPress={() => {
                            navigation.navigate('MyOrder')
                        }}>
                            <Text style={styles.cartText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <FlatList renderItem={render}
                            data={foodObjects}
                            keyExtractor={item => item.id}
                            numColumns={3}
                        />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

export default Order;
