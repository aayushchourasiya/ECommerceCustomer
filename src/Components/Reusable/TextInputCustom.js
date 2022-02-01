import {TextInput} from 'react-native';
import React from 'react';
import {Styles} from '../../assets/styles';
import { StylesLight } from '../../assets/stylesLight';
import { useSelector } from 'react-redux';

export const TextInputCustom = ({
  style,
  placeholder,
  keyboardType,
  onEndEditing,
  returnKeyType,
  value,
  onChangeText,
  customRef,
  secureTextEntry,
  autoCapitalize,
}) => {
  const theme = useSelector(state => state.theme);
  const MainStyles = theme ? Styles : StylesLight;
  return (
    <TextInput
      style={[MainStyles.textInput, style]}
      placeholder={placeholder}
      keyboardType={keyboardType || "default"}
      onEndEditing={onEndEditing ? ()=>onEndEditing() : null}
      returnKeyType={returnKeyType}
      value={value}
      secureTextEntry={secureTextEntry || false}
      ref={customRef}
      onChangeText={onChangeText || null}
      autoCapitalize={autoCapitalize || 'sentences'}
    />
  );
};
