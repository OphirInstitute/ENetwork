import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Wallet from '../screen/wallet/Wallet';
import Send from '../screen/wallet/Send';
import AddCustomToken from '../screen/wallet/AddCustomToken';
import NetworkWallet from '../screen/wallet/NetworkWallet';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const WalletStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Wallet" component={Wallet} />
      <Screen name="Send" component={Send} />
      <Screen name="AddCustomToken" component={AddCustomToken} />
      <Screen name="NetworkWallet" component={NetworkWallet} />
    </Navigator>
  );
};
export default WalletStack;
