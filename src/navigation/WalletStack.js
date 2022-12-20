import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Wallet from '../screen/wallet/Wallet';
import Send from '../screen/wallet/Send';
import AddCustomToken from '../screen/wallet/AddCustomToken';
import NetworkWallet from '../screen/wallet/NetworkWallet';
import SecretPhrase from '../screen/wallet/SecretPhrase';
import InputSecretPhrase from '../screen/wallet/InputSecretPhrase';
import SelectCurrencies from '../screen/wallet/SelectCurrencies';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const WalletStack = ({route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);
  return (
    <Navigator headerMode="none">
      {/* <Screen name="Wallet" component={Wallet} />
      <Screen name="Send" component={Send} />
      <Screen name="AddCustomToken" component={AddCustomToken} />
      <Screen name="NetworkWallet" component={NetworkWallet} />
      <Screen name="SecretPhrase" component={SecretPhrase} /> */}
      {/* <Screen name="InputSecretPhrase" component={InputSecretPhrase} /> */}
      <Screen name="SelectCurrencies" component={SelectCurrencies} />
    </Navigator>
  );
};
export default WalletStack;
