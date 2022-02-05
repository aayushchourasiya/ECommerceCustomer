import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {colors, fontFamily} from '../../assets/constants';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
import {Home, Profile} from '../Home/';

export const DrawerNavigations = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  const theme = useSelector(state => state.theme);
  const user = useSelector(state => state.user);

  const MainStyles = theme ? Styles : StylesLight;
  const backGround = {backgroundColor: theme ? colors.black : colors.white};
  const tint = theme ? colors.lightWhite : colors.black;
  const tintReverse = !theme ? colors.lightWhite : colors.black;
  const headerLeft = () => {
    const isDrawerOpen = useDrawerStatus() === 'open';
    return (
      <TouchableOpacity
        style={{margin: 10}}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon
          name={isDrawerOpen ? 'menu-unfold' : 'menu-fold'}
          size={25}
          color={theme ? colors.lightWhite : colors.black}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        swipeEnabled: false,
        headerLeft: () => headerLeft(),
        headerStyle: backGround,
        headerTitleStyle: MainStyles.textMedium,
        drawerType: 'slide',
        drawerStyle: backGround,
        drawerActiveBackgroundColor: tint,
        drawerInactiveTintColor: tint,
        drawerActiveTintColor: tintReverse,
      }}>
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabelStyle: {
            alignSelf: 'flex-end',
            fontSize: 20,
            marginVertical: 30,
          },
          drawerLabel: user.fullName,
          title: 'Your Profile',
          headerTitle: 'Your Profile',
          drawerActiveBackgroundColor: backGround,
          drawerActiveTintColor: !tint,
          drawerIcon: () => <Icon name="user" size={50} color={tint} />,
        }}
      />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
