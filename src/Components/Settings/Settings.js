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
    <View
      style={[
        MainStyles.mainBackground,
        {flex: 1, justifyContent: 'space-between', paddingBottom: 20},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={MainStyles.textLarge}>Theme</Text>
        <ButtonLarge
          text={theme ? 'DARK' : 'LIGHT'}
          style={{alignSelf: 'center', width: '50%'}}
          onPress={changeThemeFunction}
          // disabled={buttonState}
        />
      </View>
      <ButtonLarge
        text="Logout"
        style={{alignSelf: 'center'}}
        onPress={logout}
        disabled={buttonState}
      />
    </View>
  );
};
