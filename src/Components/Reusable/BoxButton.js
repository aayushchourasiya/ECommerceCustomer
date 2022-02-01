import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from '../../assets/styles';
import { StylesLight } from '../../assets/stylesLight';
import { useSelector } from 'react-redux';

export const BoxButton = ({
  disabled,
  value,
  onPress,
  style,
  textStyle,
}) => {
  const theme = useSelector(state => state.theme);
  const MainStyles = theme ? Styles : StylesLight;
  return (
    <TouchableOpacity
      onPress={onPress ? () => onPress() : null}
      style={[
        disabled ? MainStyles.boxButtonDisabled : MainStyles.boxButton,
        style,
      ]}
      disabled={disabled}
      >
      <Text style={[MainStyles.textLarge, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );
};
