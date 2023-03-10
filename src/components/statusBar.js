import {Dimensions, Platform, StatusBar} from 'react-native';
const X_WIDTH = 375,
  X_HEIGHT = 812,
  XSMAX_WIDTH = 414,
  XSMAX_HEIGHT = 896,
  {height, width} = Dimensions.get('window');

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;
export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: 1,
  default: 0,
});

//Then use it directly when imported:
