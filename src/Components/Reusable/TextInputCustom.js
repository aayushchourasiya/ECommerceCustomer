import {TextInput} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';

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
  autoCapitalize
}) => {
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
