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
import Entypo from 'react-native-vector-icons/Entypo';
import FailureModal from '../../components/FailureModal';
import FormInput from '../../components/FormInput';
import {Formik} from 'formik';
import SwipeButton from 'rn-swipe-button';
import TextButton from '../../components/TextButton';
import {
  sendPayIDSchema,
  sendPhoneSchema,
  sendSchema,
  sendWalletAddSchema,
} from '../../util/schema';
import SendBeneficiaries from '../../components/SendBeneficiaries';

const Tab = createMaterialTopTabNavigator();

const SecretPhrase = ({navigation}) => {
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

  // const toastRef = useToast();

  // const copyToClipboard = text => {
  //   Clipboard.setString(text);
  //   toastRef.show('Copied to clipboard', {
  //     duration: 2000,
  //     position: 'top',
  //     type: 'success',
  //     placement: 'bottom',
  //     // offset: { x: 600, y: 500 },
  //     animationDuration: 500,
  //     animation: {
  //       fade: true,
  //       type: 'fade',
  //     },
  //   });
  // };

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
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <Entypo
            name="chevron-thin-left"
            size={25}
            color={COLORS.white}
            onPress={() => navigation.navigate('Wallet')}
          />
          {/* <Text
            style={{
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 5,
              color: COLORS.white,
            }}>
            Send
          </Text>
          <View>
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
            height: 170,
            backgroundColor: COLORS.black,
          }}>
          <FailureModal
            isModalVisible={error.status}
            closeModal={closeFailureModal}
            message={error.message}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: COLORS.white,
              marginBottom: 10,
            }}>
            Your secret phrase
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.gray6,
              marginBottom: 10,
              lineHeight: 20,
            }}>
            Write down these words in the right order and save them somewhere
            safe
          </Text>

          <View
            style={{
              // justifyContent: 'space-between',
              flexDirection: 'column',
              flex: 0.4,
              // alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 8,
              backgroundColor: COLORS.darkBlues,
              //
            }}>
            <BoxText />
            <BoxText />
            <BoxText />
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: 112,
              borderRadius: 8,
              backgroundColor: COLORS.darkBlues,
              marginTop: 20,
              //
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: COLORS.white,
              }}>
              Copy
            </Text>
            <Image
              source={copy}
              style={{
                // alignSelf: 'center',
                marginLeft: 5,
                height: 22,
                width: 22,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              // paddingBottom: 30,
              marginBottom: 10,
              marginTop: 60,
              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                fontSize: 11,
                fontWeight: '400',
                color: COLORS.red,
                lineHeight: 20,
                textAlign: 'center',
              }}>
              understand that you stand the risk of loosing your account if you
              expose your secret phase to others!!!
            </Text>
          </View>

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
              Continue
            </Text>
            <Image source={continueB} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecretPhrase;

export const BoxText = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text style={{color: COLORS.white, fontSize: 15, fontWeight: '400'}}>
        1. Safe
      </Text>
      <Text style={{color: COLORS.white, fontSize: 15, fontWeight: '400'}}>
        1. Safe
      </Text>
      <Text style={{color: COLORS.white, fontSize: 15, fontWeight: '400'}}>
        1. Safe
      </Text>
      <Text style={{color: COLORS.white, fontSize: 15, fontWeight: '400'}}>
        1. Safe
      </Text>
    </View>
  );
};
