import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Container from '../../components/container';
import {COLORS, SIZES} from '../../constants/theme';
import scan from '../../assets/images/scan-2.png';
import note from '../../assets/images/note.png';
import arrowright from '../../assets/images/arrow-right.png';
import vector from '../../assets/images/vector.png';
import sendthumbs from '../../assets/images/sendthumbs.png';
import deposit from '../../assets/images/receive.png';
import withdraw from '../../assets/images/withdraw.png';
import buy from '../../assets/images/buy.png';
import DashboardButton from '../../components/DashboardButton';
import {StatusBarHeight} from '../../components/statusBar';
import eth from '../../assets/images/eth.png';
import bnb from '../../assets/images/bnb.png';
import xrp from '../../assets/images/xrp.png';
import bitcoin from '../../assets/images/bitcoin.png';
import Entypo from 'react-native-vector-icons/Entypo';
import logo from '../../assets/images/logo.png';
import TokensTab from '../../components/TokensTab';
import TokensRow from '../../components/TokensRow';
import FailureModal from '../../components/FailureModal';
import FormInput from '../../components/FormInput';
import {Formik} from 'formik';
import SwipeButton from 'rn-swipe-button';
import TextButton from '../../components/TextButton';
import {
  addTokenSchema,
  sendPayIDSchema,
  sendPhoneSchema,
  sendSchema,
  sendWalletAddSchema,
} from '../../util/schema';
import SendBeneficiaries from '../../components/SendBeneficiaries';
import FormInputPlain from '../../components/FormInputPlain';
import NetworkRow from '../../components/NetworkRow';

const NetworkWallet = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loginWithEmail, setLoginWithEmail] = React.useState(true);
  const [loginWithPhone, setLoginWithPhone] = React.useState(0);
  const [error, setError] = React.useState({
    status: false,
    message: '',
  });

  let formikRef = React.useRef();

  const handleLogin = () => {
    console.warn('PRESS');
  };

  const closeFailureModal = () => {
    setError({status: false, message: ''});
  };

  //
  return (
    <SafeAreaView
      style={{
        // padding: 10,
        flex: 1,
        // marginTop: StatusBarHeight,
        backgroundColor: COLORS.black,
        // backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <Entypo
          name="chevron-thin-left"
          size={25}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            marginLeft: 5,
            color: COLORS.white,
          }}>
          Network
        </Text>
        <View>
          {/* <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                marginLeft: 5,
                color: COLORS.lemon,
              }}>
              Save
            </Text> */}
        </View>
      </View>

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <NetworkRow
            coin={'Bitcoin'}
            img={bitcoin}
            perecentage={'5.76%'}
            show={true}
          />
          <NetworkRow loss coin={'Ethereum'} img={eth} perecentage="5.09%" />
          <NetworkRow coin={'BNB'} img={bnb} perecentage="4.76%" />
          <NetworkRow coin={'XRP'} img={xrp} perecentage="19:80%" />
          <NetworkRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
          <NetworkRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
          <NetworkRow coin={'Bitcoin'} img={bitcoin} perecentage={'5.76%'} />
          <NetworkRow loss coin={'Ethereum'} img={eth} perecentage="5.09%" />
          <NetworkRow coin={'BNB'} img={bnb} perecentage="4.76%" />
          <NetworkRow coin={'XRP'} img={xrp} perecentage="19:80%" />
          <NetworkRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
          <NetworkRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
          <NetworkRow coin={'Bitcoin'} img={bitcoin} perecentage={'5.76%'} />
          <NetworkRow loss coin={'Ethereum'} img={eth} perecentage="5.09%" />
          <NetworkRow coin={'BNB'} img={bnb} perecentage="4.76%" />
          <NetworkRow coin={'XRP'} img={xrp} perecentage="19:80%" />
          <NetworkRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
          <NetworkRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
          <NetworkRow coin={'Bitcoin'} img={bitcoin} perecentage={'5.76%'} />
          <NetworkRow loss coin={'Ethereum'} img={eth} perecentage="5.09%" />
          <NetworkRow coin={'BNB'} img={bnb} perecentage="4.76%" />
          <NetworkRow coin={'XRP'} img={xrp} perecentage="19:80%" />
          <NetworkRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
          <NetworkRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
          <NetworkRow coin={'Bitcoin'} img={bitcoin} perecentage={'5.76%'} />
          <NetworkRow loss coin={'Ethereum'} img={eth} perecentage="5.09%" />
          <NetworkRow coin={'BNB'} img={bnb} perecentage="4.76%" />
          <NetworkRow coin={'XRP'} img={xrp} perecentage="19:80%" />
          <NetworkRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
          <NetworkRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
          <NetworkRow coin={'Bitcoin'} img={bitcoin} perecentage={'5.76%'} />
          <NetworkRow loss coin={'Ethereum'} img={eth} perecentage="5.09%" />
          <NetworkRow coin={'BNB'} img={bnb} perecentage="4.76%" />
          <NetworkRow coin={'XRP'} img={xrp} perecentage="19:80%" />
          <NetworkRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
          <NetworkRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NetworkWallet;
