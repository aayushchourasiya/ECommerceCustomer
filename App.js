import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainStyles} from './src/assets/styles';
import {Login, Signup} from './src/Components/Auth/';
import {BottomTabs} from './src/Components/Navigators';
import auth from '@react-native-firebase/auth';

import {colors, fontFamily} from './src/assets/constants';
import {useSelector} from 'react-redux';
import {HeaderLeftButton} from './src/Components/Reusable';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ProductCategory,
  ProductDetails,
  BuyProduct,
} from './src/Components/Products/';

const App = () => {
  Icon.loadFont();
  const Stack = createNativeStackNavigator();

  const update = useSelector(state => state.updateData);
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    console.log(theme);
  }, [update,theme]);
  return (
    <NavigationContainer>
      <SafeAreaView style={MainStyles.mainBackground}>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
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
                  headerStyle: {backgroundColor: colors.black},
                  headerTitleStyle: {color: colors.lightWhite},
                })}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={({route, navigation}) => ({
                  headerLeft: () => (
                    <HeaderLeftButton onPress={() => navigation.goBack()} />
                  ),
                  headerStyle: {backgroundColor: colors.black},
                  headerTitleStyle: {color: colors.lightWhite},
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
                  headerStyle: {backgroundColor: colors.black},
                  headerTitleStyle: {color: colors.lightWhite},
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
                  headerStyle: {backgroundColor: colors.black},
                  headerTitleStyle: {
                    color: colors.lightWhite,
                    fontFamily: fontFamily.primary,
                    fontWeight: '600',
                  },
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
