import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screen/auth/Welcome';
import SignUp from '../screen/auth/SignUp';
import ImportWallet from '../screen/auth/ImportWallet';
import SignIn from '../screen/auth/SignIn';
import ImportPhrase from '../screen/auth/ImportPhrase';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;
const Auth = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Welcome" component={Welcome} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Import" component={ImportWallet} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="ImportPhrase" component={ImportPhrase} />
    </Navigator>
  );
};

export default Auth;
