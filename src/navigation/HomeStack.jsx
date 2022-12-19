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
