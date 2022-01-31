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
