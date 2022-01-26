import {StyleSheet} from 'react-native';
import {colors, fontFamily} from './constants';

export const MainStyles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: colors.black,
  },
  textExtraSmall: {
    fontSize: 12,
    color: colors.lightWhite,
    fontFamily: fontFamily.primary,
    fontWeight:'600'
  },
  textSmall: {
    fontSize: 15,
    color: colors.lightWhite,
    fontFamily: fontFamily.primary,
    fontWeight:'600'
  },
  textMedium: {
    fontSize: 20,
    color: colors.lightWhite,
    fontFamily: fontFamily.primary,
    fontWeight:'600'
  },
  textLarge: {
    fontSize: 30,
    color: colors.lightWhite,
    textAlign: 'center',
    fontFamily: fontFamily.primary,
    fontWeight:'600'
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: colors.white,
    backgroundColor: colors.lightWhite,
    margin: 10,
    fontSize: 20,
    padding: 10,
    width: '100%',
    height: 50,
    borderRadius: 5,
    fontFamily: fontFamily.primary,
    fontWeight: '600',
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
  linkText: {
    fontSize: 20,
    fontFamily: fontFamily.primary,
    textDecorationLine:'underline',
    color: colors.lightWhite,
    fontWeight: '600',
  },
});
