import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, FlatList, Pressable, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons'
import LinearGradient from 'react-native-linear-gradient';
import Foundation from 'react-native-vector-icons/Foundation'
import { VirtualizedList } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const MyComponent = ({navigation}) => {

    const { width, height } = Dimensions.get('window');

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
        {
            id: 4,
            label: 'Kacch Biryani',
            dollar: '$30',
            image: require('../../assets/images/download.jpg')
        },
    ]

    const render = ({ item }) => {
        return (
            <View style={styles.foodItemsView}>
                <Pressable onPress={() => {
                    navigation.navigate('FoodOrder', {
                        name : item.label,
                        amount : item.dollar,
                        picture : item.image
                    })
                }}>
                <AntDesign name={'heart'} color={'red'} size={13} style={styles.heartIcon} />
                <Image source={item.image} style={styles.imageStyle} />
                <Text style={styles.foodNameView}>{item.label}</Text>
                <Text style={styles.dollarText}>{item.dollar}</Text>
                <TouchableOpacity style={styles.btnPlus}>
                    <FontAwesome6 name={'plus'} color={'white'} size={15} />
                </TouchableOpacity>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                <LinearGradient colors={['#32373d', '#0e0f13', '#0e0f13']} useAngle = {true} angle={180} 
                style = {{height: 1500}}>
                <View style={styles.iconView}>
                <FontAwesome6 name={'bars-staggered'} size = {20} color = {'white'}
                style = {styles.fontIcon}/>
                <Octicons name={'bell'} color={'white'} size={20} style = {{marginHorizontal: 133}}/>
            </View>
            <View>
                <Text style={styles.textView}>Find You Something</Text>
                <Text style={styles.textView}>What do You Want</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder='Search...' style={styles.TextInput} placeholderTextColor={'grey'}
                    autoCorrect={true} />
                <TouchableOpacity style={styles.buttonView}>
                    <Foundation name={'list-bullet'} size={25} color={'white'} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.popularView}>Popular Food</Text>
            </View>
            <SafeAreaView style={styles.flatelist}>
                <FlatList renderItem={render}
                    data={foodObjects}
                    keyExtractor={item => item.id}
                    numColumns={2}/>              
            </SafeAreaView> 
            </LinearGradient>
            </View>
        </View>
    );
};



export default MyComponent;
