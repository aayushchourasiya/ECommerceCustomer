import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
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
        <Icon
          name={isDrawerOpen ? 'menu-unfold' : 'menu-fold'}
          size={25}
          color={colors.lightWhite}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior='initialRoute'
      screenOptions={{
        swipeEnabled: false,
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
            
            drawerLabelStyle: {alignSelf: 'flex-end', fontSize: 20,marginVertical:30},
            drawerActiveBackgroundColor: colors.black,
            drawerActiveTintColor: colors.lightWhite,
            drawerIcon: () => (
              <Icon name="user" size={50} color={colors.lightWhite} />
            ),
          }}
        />
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
