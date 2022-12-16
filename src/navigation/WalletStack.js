import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Wallet from '../screen/wallet/Wallet';
import Send from '../screen/wallet/Send';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const WalletStack = () => {
  return (
    <Navigator headerMode="none">
      {/* <Screen name="Wallet" component={Wallet} /> */}
      <Screen name="Send" component={Send} />
    </Navigator>
  );
};
export default WalletStack;
