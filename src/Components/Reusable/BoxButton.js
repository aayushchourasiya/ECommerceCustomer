import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';

export const BoxButton = ({
  disabled,
  value,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        disabled ? MainStyles.boxButtonDisabled : MainStyles.boxButton,
        style,
      ]}
      >
      <Text style={[MainStyles.textLarge, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );
};
