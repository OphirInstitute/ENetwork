import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screen';
import Enet from '../screen/enet/Enet';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const EnetStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Enet" component={Enet} />
    </Navigator>
  );
};
export default EnetStack;
