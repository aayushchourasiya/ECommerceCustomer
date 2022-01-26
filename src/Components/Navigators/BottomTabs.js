import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartHome} from '../Cart';
import {Settings} from '../Settings';
import {DrawerNavigations} from '.';
import {colors} from '../../assets/constants';
import {Image} from 'react-native';
import { MainStyles } from '../../assets/styles';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.black},
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.completeBlack,
      }}>
      <Tab.Screen
        name="DrawerNavigations"
        component={DrawerNavigations}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartHome"
        component={CartHome}
        options={{
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: MainStyles.textMedium,
          headerTitle:'Your Products',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/cart.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: MainStyles.textMedium,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/settings.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
