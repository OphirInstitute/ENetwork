import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Tex, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Wrapper from './src/navigation/wrapper';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

const App = props => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#6208F4',
      text: '#ffffff',
      card: '#000000',
      background: '#000',
      notification: '#333333',
      border: '#eeeeee',
    },
  };

  return (
    <>
      <StatusBar backgroundColor="red" barStyle="dark-content" />

      <NavigationContainer theme={MyTheme}>
        <Wrapper {...props} />
      </NavigationContainer>
    </>
  );
};

export default App;
