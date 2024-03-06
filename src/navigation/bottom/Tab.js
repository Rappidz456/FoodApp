import { View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyComponent from '../../screens/FoodLayout';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Profile from '../../screens/Profile';
import Heart from '../../screens/Heart';
import Cart from '../../screens/Cart';
import Plus from '../../screens/Plus';


  const MyTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#353a40',
          flexDirection: 'row',
          height: 60,
          borderColor: '#353a40',
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3
          },
          shadowOpacity: 0.3,
        },

      })}>
        <Tab.Screen name="FoodLayout" component={MyComponent} options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
              {focused ? (
                <View>
                <Feather name={'home'} size={20} color={focused ? '#fb6602': 'grey'} 
                  />
              </View>
              ) : <Feather name={'home'} size={20} color={focused ? 'grey': 'black'} />}
              </>
            )
          }
        }} />
        <Tab.Screen name='Cart' component={Cart} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
              {focused ? (
                <View>
                <Feather name={'shopping-cart'} size={20} color={focused ? 'white' : 'grey'} />
                </View>
              ) : <Feather name={'shopping-cart'} size={20} color={'grey'} />
            }
              </>
            )
          }
        }} />
        <Tab.Screen name='Plus' component={Plus} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
              {focused ? (
                <View
                style={{
                  backgroundColor: '#fb6602', 
                  width: 45, 
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 45, 
                  marginBottom: 60,
                  borderRadius: 50,
                  elevation: 4,
                }}>
                  <FontAwesome6 name={'plus'} size={23} color={focused ? 'white' : 'grey'} />
              </View>
              ) : <FontAwesome6 name={'plus'} size={23} color={'grey'} />
            }
              </>
            )
          }
        }} />
        <Tab.Screen name='Heart' component={Heart} options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
              <View>
                <Feather name={'heart'} size={20} color={focused ? 'white' : 'grey'} />
              </View>
              </>
            )
          }
        }} />
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons name={'account-outline'} size={25} color={focused ? 'white' : 'grey'} />
            )
          }
        }} />
      </Tab.Navigator>
    </>
  );
}

export default MyTabs


