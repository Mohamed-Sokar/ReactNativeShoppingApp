import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  CatagoriesScreen,
  ProductsScreen,
  CartScreen,
  ProfileScreen,
} from '../screens';
import {
  CartOff,
  CartOn,
  CatagoriesOff,
  CatagoriesOn,
  HomeOff,
  HomeOn,
  ProfileOff,
  ProfileOn,
  ProductsOff,
  ProductsOn,
} from '../assests/Icons/Navigation';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (focused ? <HomeOn /> : <HomeOff />),
        }}
      />
      <Tab.Screen
        name="CatagoriesScreen"
        component={CatagoriesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? <CatagoriesOn /> : <CatagoriesOff />,
        }}
      />
      <Tab.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? <ProductsOn /> : <ProductsOff />,
        }}
        initialParams={{catagoryName: 'All'}}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (focused ? <CartOn /> : <CartOff />),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (focused ? <ProfileOn /> : <ProfileOff />),
        }}
      />
    </Tab.Navigator>
  );
}
