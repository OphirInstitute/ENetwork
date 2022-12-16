import React from 'react';
import {View, Platform} from 'react-native';
import {COLORS} from '../constants/theme';
import {StatusBarHeight} from './statusBar';

const Container = ({children}) => {
  return (
    <View
      style={{
        padding: 15,
        flex: 1,
        marginTop: StatusBarHeight,
        // backgroundColor: COLORS.black,
      }}>
      {children}
    </View>
  );
};

export default Container;
