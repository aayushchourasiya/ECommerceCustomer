import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../assets/constants';

export const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={()=>onPress()} style={{marginRight:20}}>
      <Icon name='arrow-back-circle-outline' size={30} color={colors.lightWhite}/>
    </TouchableOpacity>
  );
};
