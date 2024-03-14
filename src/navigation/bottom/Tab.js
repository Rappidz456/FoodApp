import { View, Animated, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';

import MyComponent from '../../screens/FoodLayout';
import Profile from '../../screens/Profile';
import Heart from '../../screens/Heart';
import Cart from '../../screens/Cart';
import Plus from '../../screens/Plus';
import Order from '../../screens/FoodOrder';


const MyTabs = () => {

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'FoodLayout':
        icon = 'home';
        break;
      case 'Cart':
        icon = 'shopping-cart';
        break;
      case 'Heart':
        icon = 'heart'
        break;
    }

    return (
      <>
        <Feather name={icon} size={20} color={'white'} />
      </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  // const Tab = createBottomTabNavigator();
  return (
    <>
      <CurvedBottomBar.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        type='DOWN'
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={60}
        circleWidth={100}
        bgColor="#353a40"
        initialRouteName="FoodLayout"
        renderCircle={(selectedTab, navigate) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}
            >
              <FontAwesome6 name='plus' color={'white'} size={25} />
            </TouchableOpacity>

          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="FoodLayout"
          position="LEFT"
          component={() => <MyComponent />}
        />
        <CurvedBottomBar.Screen
          name="Cart"
          component={() => <Cart />}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="Heart"
          component={() => <Heart />}
          position='RIGHT'
        />
      </CurvedBottomBar.Navigator>
      {/* <Tab.Navigator screenOptions={() => ({
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
                  <>
                  <View style = {{
                    // position: 'absolute',
                    // width: 75,
                    // backgroundColor: 'black',
                    // borderTopWidth: 0,
                    // height: 49,
                    // borderWidth: 0,
                    // bottom: 11,
                    // borderBottomLeftRadius: 30,
                    // borderBottomRightRadius: 30
                  }}>
                    <View style = {{
                      
                    }}/>
                  </View>
                    <View style={{
                      backgroundColor: '#fb6602',
                      width: 45,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 45,
                      marginBottom: 60,
                      borderRadius: 50,
                      elevation: 4,
                    }}>
                      <Feather name={'home'} size={20} color={focused ? 'white' : 'grey'} />
                    </View>
                  </>
                ) : <Feather name={'home'} size={20} color={focused ? 'grey' : 'black'} />}
              </>
            )
          }
        }} />
        <Tab.Screen name='Cart' component={Cart} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <View >
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
          tabBarIcon: ({ focused }) => {
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
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons name={'account-outline'} size={25} color={focused ? 'white' : 'grey'} />
            )
          }
        }} />
      </Tab.Navigator> */}
    </>
  );
}

const styles = StyleSheet.create({
  btnCircleUp: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb6602',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MyTabs


