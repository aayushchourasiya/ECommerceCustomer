import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {fontFamily} from '../../assets/constants';
import {MainStyles} from '../../assets/styles';
export const ButtonLarge = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[
        disabled ? MainStyles.buttonLargeDisabled : MainStyles.buttonLarge,
        {width: '80%'},
      ]}
      onPress={() => onPress()}
      disabled={disabled || false}>
      <Text
        style={[
          MainStyles.textLarge,
          {fontFamily: fontFamily.primary, fontWeight: '600'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
