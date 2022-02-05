import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
import {useSelector} from 'react-redux';
import {ButtonLarge, TextInputCustom} from '../Reusable';
import {colors} from '../../assets/constants';

export const Profile = ({navigation}) => {
  const theme = useSelector(state => state.theme);
  const user = useSelector(state => state.user);
  const [userState, setUserState] = useState(user);
  const [userOldState, setUserOldState] = useState(user);
  const [edit, setEdit] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();

  useEffect(() => {
    navigation.addListener('focus', () => {
      setEdit(false);
      setUserState({...user, password: '', newPassword: ''});
    });
  }, [user]);

  const MainStyles = theme ? Styles : StylesLight;
  return (
    <View style={MainStyles.mainBackground}>
      <View style={styles.label}>
        <Text style={MainStyles.textMedium}>Your Name</Text>
        <TextInputCustom
          selectTextOnFocus={false}
          editable={edit}
          value={userState.fullName}
          style={{width: '90%'}}
          customRef={nameRef}
          onChangeText={text => setUserState({...userState, fullName: text})}
          onEndEditing={() => {
            emailRef.current.focus();
          }}
          returnKeyType="next"
        />
      </View>
      <View style={styles.label}>
        <Text style={MainStyles.textMedium}>Your Email</Text>
        <TextInputCustom
          selectTextOnFocus={false}
          editable={edit}
          value={userState.email}
          style={{width: '90%'}}
          customRef={emailRef}
          returnKeyType="next"
          onEndEditing={() => {
            passwordRef.current.focus();
          }}
          onChangeText={text => setUserState({...userState, email: text})}
        />
      </View>
      {edit && (
        <>
          <View style={styles.label}>
            <Text style={MainStyles.textMedium}>Current Password</Text>
            <TextInputCustom
              placeholder="Enter if you want to change your password!"
              selectTextOnFocus={false}
              editable={edit}
              value={userState.password}
              style={{width: '90%'}}
              secureTextEntry
              customRef={passwordRef}
              returnKeyType="next"
              onEndEditing={() => {
                newPasswordRef.current.focus();
              }}
              onChangeText={text =>
                setUserState({...userState, password: text})
              }
            />
          </View>
          <View style={styles.label}>
            <Text style={MainStyles.textMedium}>New Password</Text>
            <TextInputCustom
              placeholder="Enter new password"
              selectTextOnFocus={false}
              editable={userState.password === userOldState.password}
              value={userState.newPassword}
              style={{
                width: '90%',
                backgroundColor:
                  userState.password === userOldState.password
                    ? null
                    : colors.gray,
              }}
              customRef={newPasswordRef}
              onChangeText={text =>
                setUserState({...userState, newPassword: text})
              }
            />
          </View>
        </>
      )}
      <View style={{alignItems: 'center', marginTop: 15}}>
        <ButtonLarge
          text={
            edit
              ? (userState.fullName.trim() !== '' &&
                  userState.email.trim() !== '' &&
                  userOldState.fullName !== userState.fullName) ||
                userOldState.email !== userState.email
                ? 'Save Changes'
                : 'Cancel'
              : 'Edit Profile'
          }
          onPress={
            edit
              ? (userState.fullName.trim() !== '' &&
                  userState.email.trim() !== '' &&
                  userOldState.fullName !== userState.fullName) ||
                userOldState.email !== userState.email
                ? () => alert('Changed')
                : () => {
                    setEdit(prev => !prev);
                    // nameRef.current.focus();
                  }
              : () => {
                  setEdit(prev => !prev);
                  // nameRef.current.focus();
                }
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    marginTop: 15,
    marginHorizontal: 15,
    alignItems: 'flex-start',
    width: '100%',
  },
});
