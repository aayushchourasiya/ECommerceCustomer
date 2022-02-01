import {View, Text} from 'react-native';
import React from 'react';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const theme = useSelector(state => state.theme);

  const MainStyles = theme ? Styles : StylesLight;
  return (
    <View style={MainStyles.mainBackground}>
      <Text></Text>
    </View>
  );
};
