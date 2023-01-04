import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import dashboard from '../assets/images/dashboard.png';
import {Image, Text, View} from 'react-native';
import wallet from '../assets/images/wallet.png';
import enet from '../assets/images/enet.png';
import market from '../assets/images/market.png';
import candle from '../assets/images/candle.png';
import {COLORS} from '../constants/theme';
import MarketStack from './MarketStack';
import Enet from '../screen/enet/Enet';
import EnetStack from './EnetStack';
import WalletStack from './WalletStack';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,

        style: {
          // ...styles.tabStyle,
          backgroundColor: '#000000',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={dashboard}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : '#898989',
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : '#898989',
                  // ...FONTS.body5,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={market}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && COLORS.primary,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : '#898989', // ...FONTS.body5,
                }}>
                Market
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ENET"
        component={EnetStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={enet}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && COLORS.primary,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : '#898989', // ...FONTS.body5,
                }}>
                ENET
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={candle}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && COLORS.primary,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : '#898989',
                }}>
                Trade
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletStack}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={wallet}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && COLORS.primary,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : '#898989', // ...FONTS.body5,
                }}>
                Wallet
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
