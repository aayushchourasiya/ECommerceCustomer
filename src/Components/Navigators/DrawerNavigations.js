import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../assets/constants';
import {MainStyles} from '../../assets/styles';
import {Home, Profile} from '../Home/';

export const DrawerNavigations = ({navigation}) => {
  const Drawer = createDrawerNavigator();

  const headerLeft = () => {
    const isDrawerOpen = useDrawerStatus() === 'open';
    return (
      <TouchableOpacity
        style={{margin: 10}}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
          style={{width: 20, height: 20}}
          source={
            isDrawerOpen
              ? require('../../assets/images/back.png')
              : require('../../assets/images/menu.png')
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => headerLeft(),
        headerStyle: {backgroundColor: colors.black},
        headerTitleStyle: MainStyles.textMedium,
        drawerType: 'slide',
        drawerStyle: {backgroundColor: colors.black},
        drawerActiveBackgroundColor: colors.lightWhite,
        drawerInactiveTintColor: colors.lightWhite,
        drawerActiveTintColor: colors.black,
      }}>
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabelStyle: {alignSelf: 'flex-end', fontSize: 20},
          drawerActiveBackgroundColor: colors.black,
          drawerActiveTintColor: colors.lightWhite,
          drawerIcon: () => (
            <Image
              source={require('../../assets/images/user.png')}
              style={{width: 50, height: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
