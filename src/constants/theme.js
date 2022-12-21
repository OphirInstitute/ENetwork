import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 24,
  customHeight1: 32,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,

  // app dimensions
  width,
  height,
};

export const COLORS = {
  primary: '#5D00F4',
  secondary: '#01EAD4',
  lightGreen: 'rgba(114, 225, 172, 1)',
  green: '#289E65',
  green2: '#42C980',
  lemon: '#03EED8',
  white: '#FFFFFF',
  gray: '#D8D8D8',
  gray2: '#F0F0F0',
  gray3: '#808080',
  gray4: '#50555C', //text
  gray5: '#292D32',
  gray6: '#ABABAB',
  black: '#000',
  red: 'red',
  darkBlue: 'rgba(0, 9, 44,0.7)',
  darkBlue1: 'rgba(0, 9, 44,0.9)',
  darkBlues: '#171925', //text box background
  darkBlues2: 'rgba(255, 255, 255, 0.04)', //box tape
  darkPurple: '#100B16', //text box background 2
  baseColor: '#83A4D7',
  baseColor1: '#1E324E',
  textPlaceholder: '#B0BCDA',
  textPlaceholder2: '#50555C',
};
