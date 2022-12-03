import React from 'react';
import {View, Platform} from 'react-native';
import {COLORS} from '../constants/theme';
import {StatusBarHeight} from './statusBar';
console.log(
  '🚀 ~ file: container.js ~ line 4 ~ StatusBarHeight',
  StatusBarHeight,
);
const Container = ({children}) => {
  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        marginTop: StatusBarHeight,
        backgroundColor: COLORS.white,
      }}>
      {children}
    </View>
  );
};

export default Container;
