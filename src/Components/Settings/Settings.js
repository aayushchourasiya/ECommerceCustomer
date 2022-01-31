import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {currentUser, updateData,changeTheme} from '../../store/action';

export const Settings = () => {
  const dispatch = useDispatch();
  const update = useSelector(state => state.updateData);
  const theme = useSelector(state => state.theme);
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
    if(theme==="DARK"){
      dispatch(changeTheme("LIGHT"))
    }
    else{
      dispatch(changeTheme("DARK"))
    }
  };

  return (
    <View style={MainStyles.mainBackground}>
      <Text style={MainStyles.textLarge}>Theme</Text>
      <ButtonLarge
        text={theme}
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
