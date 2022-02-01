import {Platform} from 'react-native';

const colors = {
  black: '#171717',
  completeBlack: '#000000',
  white: '#FFFFFF',
  lightWhite: '#ADEFD1FF',
  gray: '#808080',
  red: '#FF0000',
  activeTab: '#33F7FF',
  blue: "#0000FF"
};
const fontFamily = {
  title: 'SedgwickAve-Regular',
  primary: 'Dongle-Bold',
  primaryRegular: 'Dongle-Regular',
  secondary: Platform.OS === 'ios' ? 'Dosis' : 'Dosis-VariableFont_wght',
};
export {colors, fontFamily};
