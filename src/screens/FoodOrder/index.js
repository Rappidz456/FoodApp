import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Order = ({navigation}) => {

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
                        <Text style = {styles.incrementText}>1</Text>
                        <TouchableOpacity style={styles.buttonView2}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.flexText}>
                        <Text style = {styles.marginText1}>% 12 Alc</Text>
                        <Text style = {styles.marginText2}>& 80 Kalaries</Text>
                        <Text style = {styles.marginText3}>700 milintress</Text>
                    </View>

                    <View style = {styles.AddButtonView}>
                        <TouchableOpacity style = {styles.AddFood} onPress={() => {
                            navigation.navigate('MyOrder')
                        }}>
                            <Text style = {styles.cartText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient>
        </View>
    );
};

export default Order;
