import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screen';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const HomeStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
export default HomeStack;
