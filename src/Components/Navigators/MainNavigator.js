import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
import {Login, Signup} from '../Auth/';
import {BottomTabs} from '../Navigators/';
import auth from '@react-native-firebase/auth';
import {colors, fontFamily} from '../../assets/constants';
import {HeaderLeftButton} from '../Reusable/';
import {ProductCategory, ProductDetails, BuyProduct} from '../Products/';
import {useSelector} from 'react-redux';

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  const theme = useSelector(state => state.theme);

  const MainStyles = theme ? Styles : StylesLight;
  const backGround = {backgroundColor: theme ? colors.black : colors.white};
  const backGroundReverse = {
    color: !theme ? colors.black : colors.white,
  };
  return (
    <SafeAreaView style={MainStyles.mainBackground}>
      <StatusBar
        barStyle={theme ? 'light-content' : 'dark-content'}
        backgroundColor={theme ? colors.black : colors.white}
      />
      <Stack.Navigator>
        {auth().currentUser ? (
          <>
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProductCategory"
              component={ProductCategory}
              options={({route, navigation}) => ({
                headerLeft: () => (
                  <HeaderLeftButton onPress={() => navigation.goBack()} />
                ),
                headerTitle: route.params.name,
                title: route.params.name,
                headerStyle: backGround,
                headerTitleStyle: backGroundReverse,
              })}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({route, navigation}) => ({
                headerLeft: () => (
                  <HeaderLeftButton onPress={() => navigation.goBack()} />
                ),
                headerStyle: backGround,
                headerTitleStyle: backGroundReverse,
                title: route.params.item.name,
                headerTitle: route.params.item.name,
              })}
            />
            <Stack.Screen
              name="BuyProduct"
              component={BuyProduct}
              options={({route, navigation}) => ({
                headerLeft: () => (
                  <HeaderLeftButton onPress={() => navigation.goBack()} />
                ),
                headerStyle: backGround,
                headerTitleStyle: backGroundReverse,
                title: 'Select Quantity',
                headerTitle: 'Select Quantity',
              })}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={Signup}
              options={({navigation}) => ({
                headerLeft: () => (
                  <HeaderLeftButton onPress={() => navigation.goBack()} />
                ),
                headerStyle: backGround,
                headerTitleStyle: {
                  color: theme ? colors.lightWhite : colors.black,
                  fontFamily: fontFamily.primary,
                  fontWeight: '600',
                },
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};
