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

const App = () => {
  const Stack = createNativeStackNavigator();

  const update = useSelector(state => state.updateData);

  useEffect(() => {}, [update]);
  return (
    <NavigationContainer>
      <SafeAreaView style={MainStyles.mainBackground}>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator>
          {auth().currentUser ? (
            <>
              <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{
                  headerShown:false
                }}
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
                options={{
                  headerStyle: {backgroundColor: colors.black},
                  headerTitleStyle: {
                    color: colors.lightWhite,
                    fontFamily: fontFamily.primary,
                    fontWeight: '600',
                  },
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
