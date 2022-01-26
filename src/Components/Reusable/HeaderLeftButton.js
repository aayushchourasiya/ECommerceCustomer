import {TouchableOpacity, Image} from 'react-native';
import React from 'react';

export const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={()=>onPress()}>
      <Image
        source={require('../../assets/images/back.png')}
        style={{width: 20, height: 20, marginLeft:5,marginRight:20}}
      />
    </TouchableOpacity>
  );
};
