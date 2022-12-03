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
  lightGreen: 'rgba(114, 225, 172, 1)',
  green: '#289E65',
  white: '#FFFFFF',
  gray: '#D8D8D8',
  gray2: '#F0F0F0',
  black: '#000',
  red: 'red',
};