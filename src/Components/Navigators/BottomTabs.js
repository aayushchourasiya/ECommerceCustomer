import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartHome} from '../Cart';
import {Settings} from '../Settings';
import {DrawerNavigations} from '.';
import {colors} from '../../assets/constants';
import {MainStyles} from '../../assets/styles';
import Icon from 'react-native-vector-icons/AntDesign';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.black},
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.lightWhite
      }}>
      <Tab.Screen
        name="DrawerNavigations"
        component={DrawerNavigations}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartHome"
        component={CartHome}
        options={{
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: MainStyles.textMedium,
          headerTitle: 'Your Products',
          tabBarIcon: ({color}) => (
            <Icon name="shoppingcart" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {backgroundColor: colors.black},
          headerTitleStyle: MainStyles.textMedium,
          tabBarIcon: ({color}) => (
            <Icon name="setting" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
