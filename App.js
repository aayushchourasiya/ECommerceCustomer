import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {MainNavigator} from './src/Components/Navigators/MainNavigator';
const App = () => {
  Icon.loadFont();

  const update = useSelector(state => state.updateData);
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    console.log(theme);
  }, [update, theme]);
  return (
    <NavigationContainer>
      <MainNavigator theme={theme === 'DARK' ? true : false} />
    </NavigationContainer>
  );
};

export default App;
