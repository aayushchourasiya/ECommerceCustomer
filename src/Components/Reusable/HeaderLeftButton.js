import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../assets/constants';

export const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={()=>onPress()} style={{marginRight:20}}>
      <Icon name='leftcircle' size={25} color={colors.lightWhite}/>
    </TouchableOpacity>
  );
};
