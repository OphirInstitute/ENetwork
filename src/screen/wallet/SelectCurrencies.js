import React, {useEffect, useState} from 'react';
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
import Container from '../../components/container';
import {COLORS, SIZES} from '../../constants/theme';
import scan from '../../assets/images/scan-2.png';
import note from '../../assets/images/note.png';
import dai from '../../assets/images/dai.png';
import arrowright from '../../assets/images/arrow-right.png';
import copy from '../../assets/images/copy.png';
import sendthumbsB from '../../assets/images/sendthumbsB.png';
import continueB from '../../assets/images/continueB.png';
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
import FailureModal from '../../components/FailureModal';
import FormInput from '../../components/FormInput';
import {Formik} from 'formik';
import SwipeButton from 'rn-swipe-button';
import Entypo from 'react-native-vector-icons/Entypo';
import {useToast} from 'react-native-toast-notifications';
import Clipboard from '@react-native-clipboard/clipboard';
import TextButton from '../../components/TextButton';
import {
  sendPayIDSchema,
  sendPhoneSchema,
  sendSchema,
  sendWalletAddSchema,
} from '../../util/schema';
import SendBeneficiaries from '../../components/SendBeneficiaries';
import CurrencySearch from '../../components/CurrencySearch';
import ToggleSwitch from 'toggle-switch-react-native';

const Tab = createMaterialTopTabNavigator();

const SelectCurrencies = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loginWithEmail, setLoginWithEmail] = React.useState(true);
  const [loginWithPhone, setLoginWithPhone] = React.useState(0);
  const [error, setError] = React.useState({
    status: false,
    message: '',
  });

  let formikRef = React.useRef();
  const toastRef = useToast();

  const handleLogin = () => {
    console.warn('PRESS');
  };

  const closeFailureModal = () => {
    setError({status: false, message: ''});
  };

  //
  return (
    <View
      style={{
        // padding: 10,
        flex: 1,
        marginTop: StatusBarHeight,
        backgroundColor: COLORS.black,
      }}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <Entypo
            name="chevron-thin-left"
            size={25}
            color={COLORS.white}
            onPress={() => navigation.navigate('Wallet')}
          />
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              marginLeft: 5,
              color: COLORS.white,
            }}>
            Select currencies
          </Text>
          {/* <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                marginLeft: 5,
                color: COLORS.lemon,
              }}>
              Save
            </Text>
          </View> */}
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          // paddingTop: 8,
        }}>
        <View
          style={{
            flex: 1,
            // paddingTop: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
            // height: 170,
            backgroundColor: COLORS.black,
          }}>
          <FailureModal
            isModalVisible={error.status}
            closeModal={closeFailureModal}
            message={error.message}
          />

          <CurrencySearch
            inputStyle={{
              // paddingLeft: SIZES.padding,
              paddingRight: 20,
              flexShrink: 1,
              flexWrap: 'wrap',
              fontSize: 16,
              fontWeight: '500',
              color: COLORS.gray2,
            }}
          />

          <ScrollView
            style={{
              paddingTop: 30,
            }}>
            <Currencies icon={eth} />
            <Currencies icon={logo} />
            <Currencies icon={bnb} />
            <Currencies icon={bitcoin} />
            <Currencies icon={eth} />
            <Currencies icon={logo} />
            <Currencies icon={bnb} />
            <Currencies icon={bitcoin} />
            <Currencies icon={eth} />
            <Currencies icon={logo} />
            <Currencies icon={bnb} />
            <Currencies icon={bitcoin} />
            <Currencies icon={eth} />
            <Currencies icon={logo} />
            <Currencies icon={bnb} />
            <Currencies icon={bitcoin} />
            <Currencies icon={eth} />
            <Currencies icon={logo} />
            <Currencies icon={bnb} />
            <Currencies icon={bitcoin} />
            <Currencies icon={eth} />
            <Currencies icon={logo} />
            <Currencies icon={bnb} />
            <Currencies icon={bitcoin} />
          </ScrollView>

          <TouchableOpacity
            style={{
              // flexDirection: 'column',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: COLORS.white,
                lineHeight: 20,
                textAlign: 'center',
                marginBottom: -33,
                zIndex: 99,
                // marginTop: 60,
                // paddingHorizontal: 30,
              }}>
              Done
            </Text>
            <Image source={continueB} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectCurrencies;

export const Currencies = ({icon}) => {
  const [show, setShow] = React.useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={icon} style={{height: 35, width: 35}} />
        <View
          style={{
            flexDirection: 'column',
            paddingLeft: 10,
          }}>
          <Text style={{color: COLORS.white, fontSize: 15, fontWeight: '500'}}>
            DAI
          </Text>
          <Text style={{color: COLORS.gray4, fontSize: 13, fontWeight: '400'}}>
            Ethereum
          </Text>
        </View>
      </View>
      <ToggleSwitch
        isOn={show}
        onColor={COLORS.lemon}
        offColor={COLORS.gray}
        // label={hideBalance ? 'Show Balance' : 'Hide Balance'}
        // labelStyle={{
        //   color: COLORS.baseColor,
        //   fontWeight: 'bold',
        //   fontSize: SIZES.body5,
        // }}
        size="small"
        // onToggle={isOn => dispatch(saveHideBalance(isOn))}
        onToggle={isOn => setShow(isOn)}
      />
    </View>
  );
};
