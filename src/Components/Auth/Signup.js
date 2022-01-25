import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge, TextInputCustom} from '../Reusable';
import {colors, fontFamily} from '../../assets/constants';
import {emailValidation, passwordValidation} from '../../Helper/validation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {updateData, currentUser} from '../../store/action';
export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonState, setButtonState] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const update = useSelector(state => state.updateData);

  const submit = () => {
    if (
      name.trim() !== '' &&
      password.trim() !== '' &&
      email.trim() !== '' &&
      password === confirmPassword
    ) {
      if (emailValidation(email)) {
        if (passwordValidation(password)) {
          setButtonState(true);
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              firestore()
                .collection('Users')
                .add({
                  fullName: name,
                  password: password,
                  role: 'customer',
                  email: email,
                })
                .then(() => {
                  setButtonState(false);
                  dispatch(updateData(!update));
                  dispatch(currentUser(email));
                });
            })
            .catch(e => {
              alert(e.code);
              setButtonState(false);
            });
        } else {
          alert('Please use at least 6 characters in your password!');
          setButtonState(false);
        }
      } else {
        alert('Please use proper email!');
      }
    } else {
      alert('Please fill all details properly!');
    }
  };

  return (
    <View style={MainStyles.mainBackground}>
      <View style={MainStyles.centerView}>
        <Text
          style={[
            MainStyles.textLarge,
            {fontFamily: fontFamily.title, marginBottom: 10},
          ]}>
          A-Z Market
        </Text>
        <Text style={[MainStyles.textMedium, styles.textLabel]}>Full Name</Text>
        <TextInputCustom
          style={{width: '80%'}}
          placeholder="Enter Your Name Here!"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={[MainStyles.textMedium, styles.textLabel]}>Email</Text>
        <TextInputCustom
          style={{width: '80%'}}
          placeholder="Enter Your Email Here!"
          value={email}
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
        />
        <Text style={[MainStyles.textMedium, styles.textLabel]}>Password</Text>
        <TextInputCustom
          style={{width: '80%'}}
          placeholder="Enter Your Password Here!"
          value={password}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Text style={[MainStyles.textMedium, styles.textLabel]}>
          Confirm Password
        </Text>
        <TextInputCustom
          style={{width: '80%'}}
          placeholder="Confirm Your Password Here!"
          autoCapitalize="none"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Text style={[MainStyles.textMedium, styles.textDanger]}>
          {password !== confirmPassword ? "Passwords don't match!" : error}
        </Text>
        <ButtonLarge text="Submit" onPress={submit} disabled={buttonState} />
        <Text
          style={[
            MainStyles.textExtraSmall,
            {textAlign: 'center', marginHorizontal: '20%', marginTop: 5},
          ]}>
          By submitting, you will be agreeing to our terms of service and
          privacy policy!
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textLabel: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  textDanger: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: colors.red,
    marginBottom: 5,
  },
});
