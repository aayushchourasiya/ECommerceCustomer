import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../assets/constants';
import {useSelector} from 'react-redux';

export const HeaderLeftButton = ({onPress}) => {
  const theme = useSelector(state => state.theme);
  return (
    <TouchableOpacity onPress={() => onPress()} style={{marginRight: 20}}>
      <Icon
        name="leftcircle"
        size={25}
        color={theme ? colors.lightWhite : colors.black}
      />
    </TouchableOpacity>
  );
};
