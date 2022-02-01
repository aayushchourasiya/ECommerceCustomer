import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartHome} from '../Cart';
import {Settings} from '../Settings';
import {DrawerNavigations} from '.';
import {colors} from '../../assets/constants';
import {Styles} from '../../assets/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {StylesLight} from '../../assets/stylesLight';
import {useSelector} from 'react-redux';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const theme = useSelector(state => state.theme);

  const MainStyles = theme ? Styles : StylesLight;
  const backGround = {backgroundColor: theme ? colors.black : colors.white};
  return (
    <Tab.Navigator
      initialRouteName="DrawerNavigations"
      screenOptions={{
        tabBarStyle: {backgroundColor: theme ? colors.black : colors.white},
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme ? colors.activeTab : colors.blue,
        tabBarInactiveTintColor: theme ? colors.lightWhite : colors.black,
      }}>
      <Tab.Screen
        name="DrawerNavigations"
        component={DrawerNavigations}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="CartHome"
        component={CartHome}
        options={{
          headerStyle: backGround,
          headerTitleStyle: MainStyles.textMedium,
          headerTitle: 'Your Cart',
          tabBarIcon: ({color}) => (
            <Icon name="shoppingcart" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: backGround,
          headerTitleStyle: MainStyles.textMedium,
          tabBarIcon: ({color}) => (
            <Icon name="setting" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
