import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {COLORS} from '../constants/theme';
import {StatusBarHeight} from './statusBar';

const Container = ({children}) => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.dark} />

      <View
        style={{
          padding: 15,
          flex: 1,
          marginTop: StatusBarHeight,
          // backgroundColor: COLORS.dark,
        }}>
        {children}
      </View>
    </>
  );
};

export default Container;
