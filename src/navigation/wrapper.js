import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './tabs';

const {Navigator, Screen} = createStackNavigator();

const Wrapper = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Navigator {...props} headerMode="none">
      {loggedIn ? (
        <>
          <Screen name="tabs" component={Tabs} />
        </>
      ) : (
        <>
          <Screen name="auth" component={Tabs} />
        </>
      )}
    </Navigator>
  );
};

export default Wrapper;
