import {store} from '../store/store';

const colors = {
  black: store.getState().theme === 'LIGHT' ? 'white' : '#171717',
  completeBlack: '#000000',
  white: '#FFFFFF',
  lightWhite: store.getState().theme === 'LIGHT' ? '#171717' : '#ADEFD1FF',
  gray: '#808080',
  red: '#FF0000',
  activeTab: store.getState().theme === 'LIGHT' ? 'blue' : '#33F7FF',
};
const fontFamily = {
  title: 'SedgwickAve-Regular',
  primary: 'Dongle-Bold',
  primaryRegular: 'Dongle-Regular',
};
export {colors, fontFamily};
