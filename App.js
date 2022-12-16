import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Wrapper from './src/navigation/wrapper';
import {NavigationContainer} from '@react-navigation/native';

const App = props => {
  useEffect(() => {
    // setTimeout(() => {
    RNBootSplash.hide({fade: true});
    console.log('Bootsplash has been hidden successfully');
    // }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Wrapper {...props} />
    </NavigationContainer>
  );
};

export default App;
