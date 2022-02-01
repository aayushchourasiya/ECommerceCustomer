import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {Styles} from '../../assets/styles';
import {StylesLight} from '../../assets/stylesLight';
import {fontFamily} from '../../assets/constants';
import {ButtonLarge, TextInputCustom} from '../Reusable/';
import {} from '../Reusable/TextInputCustom';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {currentUser, updateData} from '../../store/action';

export const Login = ({navigation}) => {
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonState, setButtonState] = useState(false);

  const dispatch = useDispatch();
  const update = useSelector(state => state.updateData);
  const theme = useSelector(state => state.theme);
  const MainStyles = theme ? Styles : StylesLight;
  const login = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setButtonState(true);
      firestore()
        .collection('Users')
        .where('email', '==', email.trim())
        .get()
        .then(querySnapshot => {
          if (querySnapshot._docs[0]._data.role === 'customer') {
            auth()
              .signInWithEmailAndPassword(email.trim(), password)
              .then(() => {
                setButtonState(false);
                dispatch(updateData(!update));
                dispatch(currentUser(email.trim()));
              })
              .catch(e => {
                alert(
                  'Something is wrong Please check your email or password!',
                );
                setButtonState(false);
              });
          } else {
            alert(
              "Please login on the website as you don't have Customer account!",
            );
            setButtonState(false);
          }
        })
        .catch(e => {
          alert('Something is wrong Please check your email or password!');
          setButtonState(false);
        });
    } else {
      alert('Please fill all details!');
    }
  };

  return (
    <View style={MainStyles.mainBackground}>
      <View style={MainStyles.centerView}>
        <Text style={[MainStyles.textLarge, {fontFamily: fontFamily.title}]}>
          A-Z Market
        </Text>
        <TextInputCustom
          style={{width: '90%'}}
          placeholder="Enter email id here!"
          keyboardType="email-address"
          onEndEditing={() => passwordRef.current.focus()}
          returnKeyType="next"
          value={email}
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
        />
        <TextInputCustom
          style={{width: '90%'}}
          placeholder="Enter password here!"
          customRef={passwordRef}
          returnKeyType="done"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <ButtonLarge disabled={buttonState} text="Login" onPress={login} />
        <Text style={[MainStyles.textMedium, {marginVertical: 5}]}>
          Don't have an account?
        </Text>
        <Text
          style={MainStyles.linkText}
          onPress={() => navigation.navigate('SignUp')}>
          Sign up!
        </Text>
      </View>
    </View>
  );
};
