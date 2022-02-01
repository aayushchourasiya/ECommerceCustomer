import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {fontFamily} from '../../assets/constants';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
export const ButtonLarge = ({
  text,
  onPress,
  disabled,
  style,
  textStyle,
  iconName,
  iconColor,
}) => {
  const theme = useSelector(state => state.theme);
  const MainStyles = theme ? Styles : StylesLight;
  return (
    <TouchableOpacity
      style={[
        disabled ? MainStyles.buttonLargeDisabled : MainStyles.buttonLarge,
        {
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress ? () => onPress() : null}
      disabled={disabled || false}>
      <Text
        style={[
          MainStyles.textLarge,
          {fontFamily: fontFamily.primary},
          textStyle,
        ]}>
        {text}
      </Text>
      {iconName && <Icon style={{marginLeft:10}} name={iconName} size={25} color={iconColor} />}
    </TouchableOpacity>
  );
};
