import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Market from '../screen/market/Market';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const MarketStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Market" component={Market} />
    </Navigator>
  );
};
export default MarketStack;
