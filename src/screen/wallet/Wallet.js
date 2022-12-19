import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/container';
import {COLORS, SIZES} from '../../constants/theme';
import eye from '../../assets/images/eye.png';
import ov1 from '../../assets/images/ov-1.png';
import ov2 from '../../assets/images/ov-2.png';
import ov3 from '../../assets/images/ov-3.png';
import ov4 from '../../assets/images/ov-4.png';
import eyeB from '../../assets/images/eyeB.png';
import send from '../../assets/images/send-2.png';
import deposit from '../../assets/images/receive.png';
import withdraw from '../../assets/images/withdraw.png';
import buy from '../../assets/images/buy.png';
import DashboardButton from '../../components/DashboardButton';
import {StatusBarHeight} from '../../components/statusBar';
import eth from '../../assets/images/eth.png';
import logo from '../../assets/images/logo.png';
import bnb from '../../assets/images/bnb.png';
import bitcoin from '../../assets/images/bitcoin.png';
import TokensTab from '../../components/TokensTab';
import TokensRow from '../../components/TokensRow';

const Tab = createMaterialTopTabNavigator();

const Wallet = () => {
  const navigation = useNavigation();

  //
  function renderTabs() {
    return (
      <Tab.Navigator
        // style={{backgroundColor: COLORS.white}}
        tabBarOptions={{
          activeTintColor: COLORS.white,
          inactiveTintColor: COLORS.gray3,
          style: {
            backgroundColor: COLORS.black,
            // borderRadius: 10,
            // marginHorizontal: 20,
            // height: 35,
          },
          labelStyle: {
            fontWeight: '500',
            fontSize: 14,
            fontStyle: 'normal',
            textTransform: 'capitalize',
          },
          indicatorStyle: {
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 2,
            elevation: 0,
          },
          indicatorContainerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: COLORS.gray5,
            borderStyle: 'solid',
          },
        }}
        screenOptions={{
          tabBarLabelStyle: {
            // ...FONTS.body5,
            // fontFamily: 'Montserrat-Bold',
            fontWeight: '600',
            color: COLORS.primary,
            marginTop: SIZES.margin,
          },
          tabBarStyle: {
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 4,
            elevation: 0,
          },
          tabBarIndicatorStyle: {
            justifyContent: 'flex-start',
          },
          // tabBarScrollEnabled: true,
          swipeEnabled: true,
          tabBarBounces: true,
        }}>
        <Tab.Screen name="Overview" component={OverviewTab} />
        <Tab.Screen name="Crypto" component={CryptoTab} />
        <Tab.Screen name="NFT" component={NftTab} />
        <Tab.Screen name="Earn" component={EarnTab} />
        <Tab.Screen name="Card" component={CardTab} />
      </Tab.Navigator>
    );
  }

  //
  return (
    <View
      style={{
        // padding: 10,
        flex: 1,
        marginTop: StatusBarHeight,
        backgroundColor: COLORS.black,
      }}>
      {/* <SafeAreaView>
        <View
          style={{justifycontent: 'center', alignItems: 'center', padding: 10}}>
          <Text style={{fontWeight: '600'}}>WALLET</Text>
        </View>
      </SafeAreaView> */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: SIZES.padding,
        }}>
        {renderTabs()}
      </View>
    </View>
  );
};

export default Wallet;

export const OverviewTab = () => {
  return (
    <View
      style={{
        // borderColor: COLORS.gray,
        // borderWidth: 2,
        // borderRadius: 15,
        flex: 1,
        paddingTop: 40,
        padding: 25,
        height: 170,
        backgroundColor: COLORS.black,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            // flex: 1,
          }}>
          <Text
            style={{
              fontSize: 11,
              letterSpacing: 10,
              fontWeight: '600',
              color: COLORS.gray2,
            }}>
            TOTAL ASSET
          </Text>
          <TouchableOpacity>
            <Image
              source={eyeB}
              style={{
                alignSelf: 'center',
                marginLeft: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: 8, flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 22, fontWeight: '600', color: COLORS.white}}>
            {' '}
            $9,438,600.00
          </Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginTop: 10, color: COLORS.gray2}}> USD</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.green2,
          width: 80,
          height: 20,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: COLORS.white}}> +0.34%</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          marginTop: 40,
          alignItems: 'center',
        }}>
        <Image source={ov1} style={{marginBottom: 5}} />
        <Image source={ov2} style={{marginBottom: 5}} />
        <Image source={ov3} style={{marginBottom: 5}} />
        <Image source={ov4} style={{marginBottom: 5}} />
        {/* <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#21E985',
            width: '100%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            paddingHorizontal: 20,
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Crypto
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 15,
                fontWeight: '500',
              }}>
              $30,989.09
            </Text>
            <Text
              style={{
                color: COLORS.gray3,
                fontSize: 15,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              USD
            </Text>
          </View>
        </View> */}
        {/* <View
          style={{
            marginBottom: 5,
            flexDirection: 'row',
            backgroundColor: '#5D00F4',
            width: '100%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Earned
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 15,
                fontWeight: '500',
              }}>
              $30,989.09
            </Text>
            <Text
              style={{
                color: COLORS.gray3,
                fontSize: 15,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              USD
            </Text>
          </View>
        </View> */}
        {/* <View
          style={{
            marginBottom: 5,
            flexDirection: 'row',
            backgroundColor: '#17FFF1',
            width: '100%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontWeight: '500',
            }}>
            NFT
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: COLORS.gray3,
                fontSize: 15,
                fontWeight: '500',
              }}>
              Coming soon
            </Text>
          </View>
        </View> */}
        {/* <View
          style={{
            marginBottom: 5,
            flexDirection: 'row',
            backgroundColor: '#062DF9',
            width: '100%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Card
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: COLORS.gray3,
                fontSize: 15,
                fontWeight: '500',
              }}>
              Coming soon
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export const CryptoTab = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Send');
  };
  const handleWithdrawal = () => {
    // navigation.navigate('Send');
    console.log('press');
  };
  const handleDeposit = () => {
    // navigation.navigate('Send');
    console.log('press');
  };
  const handleBuy = () => {
    // navigation.navigate('Send');
    console.log('press');
  };
  //
  return (
    <View
      style={{
        // borderColor: COLORS.gray,
        // borderWidth: 2,
        // borderRadius: 15,
        flex: 1,
        paddingTop: 40,
        padding: 25,
        height: 170,
        backgroundColor: COLORS.black,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            // flex: 1,
          }}>
          <Text
            style={{
              fontSize: 12,
              letterSpacing: 5.5,
              fontWeight: '400',
              color: COLORS.gray2,
            }}>
            AVAILABLE BALANCE
          </Text>
          <TouchableOpacity>
            <Image
              source={eyeB}
              style={{
                alignSelf: 'center',
                marginLeft: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: 8, flexDirection: 'row', marginLeft: -5}}>
        <View>
          <Text style={{fontSize: 22, fontWeight: '600', color: COLORS.white}}>
            {' '}
            $9,438,600.00
          </Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginTop: 10, color: COLORS.gray2}}> USD</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <DashboardButton
          title={'Send'}
          source={send}
          press={onPress}
          show={true}
        />
        <DashboardButton title={'Deposit'} source={deposit} />
        <DashboardButton title={'Withdraw'} source={withdraw} />
        <DashboardButton title={'Buy'} source={buy} />
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: COLORS.gray2,
          backgroundColor: COLORS.darkBlues,
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          position: 'absolute',
          top: 210,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <TokensTab />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TokensRow
            loss
            coin={'Bitcoin'}
            network={'BTC'}
            leftbottom={19400}
            rightbottom={'6,596,800.00'}
            img={bitcoin}
            perecentage={'0.87%'}
          />
          <TokensRow
            loss
            coin={'Binance'}
            network={'BNB'}
            leftbottom={270}
            rightbottom={'91,800.00'}
            img={bnb}
            perecentage="0.87%"
          />
          <TokensRow
            loss
            coin={'Etherum'}
            network={'ETH'}
            leftbottom={1350}
            rightbottom={'2,700,000.00'}
            img={eth}
            perecentage="0.87%"
          />
          <TokensRow
            loss
            coin={'Enetwork'}
            network={'ENET'}
            leftbottom={0.005}
            rightbottom={'50,000.00'}
            img={logo}
            perecentage="0.87%"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export const NftTab = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Send');
  };
  const handleWithdrawal = () => {
    // navigation.navigate('Send');
    console.log('press');
  };
  const handleDeposit = () => {
    // navigation.navigate('Send');
    console.log('press');
  };
  const handleBuy = () => {
    // navigation.navigate('Send');
    console.log('press');
  };
  //
  return (
    <View
      style={{
        // borderColor: COLORS.gray,
        // borderWidth: 2,
        // borderRadius: 15,
        flex: 1,
        paddingTop: 40,
        padding: 25,
        height: 170,
        backgroundColor: COLORS.black,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            // flex: 1,
          }}>
          <Text
            style={{
              fontSize: 12,
              letterSpacing: 5.5,
              fontWeight: '400',
              color: COLORS.gray2,
            }}>
            AVAILABLE BALANCE
          </Text>
          <TouchableOpacity>
            <Image
              source={eyeB}
              style={{
                alignSelf: 'center',
                marginLeft: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: 8, flexDirection: 'row', marginLeft: -5}}>
        <View>
          <Text style={{fontSize: 22, fontWeight: '600', color: COLORS.white}}>
            {' '}
            $0
          </Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginTop: 10, color: COLORS.gray2}}> USD</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <DashboardButton
          title={'Send'}
          source={send}
          press={onPress}
          show={true}
        />
        <DashboardButton title={'Deposit'} source={deposit} />
        <DashboardButton title={'Withdraw'} source={withdraw} />
        <DashboardButton title={'Buy'} source={buy} />
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: COLORS.gray2,
          backgroundColor: COLORS.darkBlues,
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          position: 'absolute',
          top: 210,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <TokensTab show="NFT" />
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      </View>
    </View>
  );
};

export const EarnTab = () => {
  return (
    <View
      style={{
        // borderColor: COLORS.gray,
        // borderWidth: 2,
        // borderRadius: 15,
        flex: 1,
        paddingTop: 40,
        padding: 25,
        height: 170,
        backgroundColor: COLORS.black,
      }}></View>
  );
};

export const CardTab = () => {
  return (
    <View
      style={{
        // borderColor: COLORS.gray,
        // borderWidth: 2,
        // borderRadius: 15,
        flex: 1,
        paddingTop: 40,
        padding: 25,
        height: 170,
        backgroundColor: COLORS.black,
      }}></View>
  );
};
