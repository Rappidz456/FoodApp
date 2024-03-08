import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Order = ({ navigation }) => {

    const route = useRoute();
    const { name, amount, picture, Id } = route.params

    const foodItem = 'Steak'
    const prices = 20;

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
                            navigation.navigate('MyOrder', {
                                data: {
                                    num: Id,
                                    rec: name,
                                    price: amount,
                                    image: picture
                                }

                            })
                        }}>
                            <Text style={styles.cartText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.foodItemsView}>
                        <AntDesign name={'heart'} color={'red'} size={13} style={styles.heartIcon} />
                        {/* <Image source={item.image} style={styles.imageStyle} /> */}
                        <Text style={styles.foodNameView}>{foodItem}</Text>
                        <Text style={styles.dollarText}>{prices}</Text>
                        <TouchableOpacity style={styles.btnPlus}>
                            <FontAwesome6 name={'plus'} color={'white'} size={15} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

export default Order;
