import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartHome} from '../Cart';
import {Settings} from '../Settings';
import {DrawerNavigations} from '.';
import {colors} from '../../assets/constants';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{tabBarStyle: {backgroundColor: colors.black}}}>
      <Tab.Screen
        name="TabNavigation"
        component={DrawerNavigations}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="CartHome" component={CartHome} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
