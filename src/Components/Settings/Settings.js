import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
import {ButtonLarge} from '../Reusable';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {currentUser, updateData, changeTheme} from '../../store/action';

export const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const update = useSelector(state => state.updateData);
  const theme = useSelector(state => state.theme);
  const MainStyles = theme ? Styles : StylesLight;
  const [buttonState, setButtonState] = useState(false);
  const logout = () => {
    setButtonState(true);
    auth()
      .signOut()
      .then(() => {
        setButtonState(false);
        dispatch(updateData(!update));
        dispatch(currentUser(null));
      });
  };
  const changeThemeFunction = () => {
    if (theme) {
      dispatch(changeTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  };

  return (
    <View style={MainStyles.mainBackground}>
      <Text style={MainStyles.textLarge}>Theme</Text>
      <ButtonLarge
        text={theme ? 'DARK' : 'LIGHT'}
        style={{alignSelf: 'center'}}
        onPress={changeThemeFunction}
        // disabled={buttonState}
      />
      <ButtonLarge
        text="Logout"
        style={{alignSelf: 'center'}}
        onPress={logout}
        disabled={buttonState}
      />
    </View>
  );
};
