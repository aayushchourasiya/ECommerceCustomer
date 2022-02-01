import {StyleSheet} from 'react-native';
import {colors, fontFamily} from './constants';

export const Styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor:colors.black,
  },
  textExtraSmall: {
    fontSize: 15,
    color: colors.lightWhite,
    fontFamily: fontFamily.primary,
    // fontWeight:'600'
  },
  textSmall: {
    fontSize: 20,
    color: colors.lightWhite,
    fontFamily: fontFamily.primaryRegular,
    // fontWeight:'600'
  },
  textMedium: {
    fontSize: 30,
    color: colors.lightWhite,
    textAlign: 'center',
    fontFamily: fontFamily.primaryRegular,
    // fontWeight:'600'
  },
  textLarge: {
    fontSize: 30,
    color: colors.lightWhite,
    textAlign: 'center',
    fontFamily: fontFamily.primary,
    // fontWeight:'600'
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: colors.white,
    backgroundColor: colors.lightWhite,
    color: colors.black,
    margin: 10,
    fontSize: 25,
    padding: 10,
    width: '100%',
    height: 50,
    borderRadius: 5,
    fontFamily: fontFamily.primaryRegular,
    // fontWeight: '600',
  },
  buttonLarge: {
    borderRadius: 10,
    borderColor: colors.lightWhite,
    borderWidth: 2,
    width: '100%',
    paddingVertical: 5,
    margin: 5,
  },
  buttonLargeDisabled: {
    borderRadius: 10,
    backgroundColor: colors.gray,
    borderColor: colors.gray,
    borderWidth: 2,
    width: '100%',
    paddingVertical: 5,
    margin: 5,
  },
  boxButton: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: colors.lightWhite,
  },
  boxButtonDisabled: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: colors.gray,
    backgroundColor: colors.gray,
  },
  linkText: {
    fontSize: 30,
    fontFamily: fontFamily.primary,
    textDecorationLine: 'underline',
    color: colors.lightWhite,
    fontWeight: '600',
  },
});
