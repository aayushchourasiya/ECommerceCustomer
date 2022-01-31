import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {fontFamily} from '../../assets/constants';
import {MainStyles} from '../../assets/styles';
export const ButtonLarge = ({
  text,
  onPress,
  disabled,
  style,
  textStyle,
  iconName,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        disabled ? MainStyles.buttonLargeDisabled : MainStyles.buttonLarge,
        {width: '80%'},
        style,
      ]}
      onPress={onPress ? () => onPress() : null}
      disabled={disabled || false}>
      <Text
        style={[
          MainStyles.textLarge,
          {fontFamily: fontFamily.primary, fontWeight: '600'},
          textStyle,
        ]}>
        {text}{' '}
        {iconName && <Icon name={iconName} size={25} color={iconColor} />}
      </Text>
    </TouchableOpacity>
  );
};
