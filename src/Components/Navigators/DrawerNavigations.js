import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {colors} from '../../assets/constants';
import {MainStyles} from '../../assets/styles';
import {Home} from '../Home/';

export const DrawerNavigations = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.black},
        headerTitleStyle: MainStyles.textMedium,
        drawerStyle:{backgroundColor:colors.black},
        drawerLabelStyle:{color:colors.black},
        drawerActiveBackgroundColor:colors.lightWhite,
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
