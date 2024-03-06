//import liraries
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MyTabs from '../bottom/Tab';
import Order from '../../screens/FoodOrder';
import OrderPlace from '../../screens/MyOrder';
const Stack = createStackNavigator();

const AppWrapper = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='bottom' screenOptions={{
                headerBackImage : () => {
                    return(
                        <MaterialIcons name='arrow-back-ios-new' size={25} color={'#919599'}/>
                    )
                }
            }}>
                <Stack.Screen name='bottom' component={MyTabs} options={{
                    headerShown: false,                    
                }}/>
                <Stack.Screen name='FoodOrder' component={Order} options={{
                    title : '',
                    headerTransparent: true,
                }}/>
                <Stack.Screen name='MyOrder' component={OrderPlace} options={{
                    title : 'My Order',
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                        fontFamily: 'Poppins-Bold',
                        fontSize: 25
                    }
                }}/>    
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default AppWrapper;
