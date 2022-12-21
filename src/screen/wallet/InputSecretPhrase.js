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
import Container from '../../components/container';
import {COLORS, SIZES} from '../../constants/theme';
import copy from '../../assets/images/copy.png';
import continueB from '../../assets/images/continueB.png';
import Entypo from 'react-native-vector-icons/Entypo';
import FailureModal from '../../components/FailureModal';
import {StatusBarHeight} from '../../components/statusBar';

const InputSecretPhrase = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loginWithEmail, setLoginWithEmail] = React.useState(true);
  const [loginWithPhone, setLoginWithPhone] = React.useState(0);
  const [error, setError] = React.useState({
    status: false,
    message: '',
  });

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
            Input your secret phrase
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.gray6,
              marginBottom: 10,
              lineHeight: 20,
            }}>
            select your secret phase according to order
          </Text>

          <View
            style={{
              flexDirection: 'column',
              flex: 0.4,
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 8,
              backgroundColor: COLORS.darkBlues,
              //
            }}>
            {/* <BoxText />
            <BoxText />
            <BoxText /> */}
          </View>

          <View
            style={{
              flexDirection: 'column',
              flex: 0.5,
              marginTop: 35,
              paddingVertical: 15,
              //
            }}>
            <BoxTextSelect />
            <BoxTextSelect />
            <BoxTextSelect />
          </View>

          <View
            style={{
              marginBottom: 10,
              marginTop: 60,
              paddingHorizontal: 30,
            }}>
            {/* <Text
              style={{
                fontSize: 11,
                fontWeight: '400',
                color: COLORS.red,
                lineHeight: 20,
                textAlign: 'center',
              }}>
              understand that you stand the risk of loosing your account if you
              expose your secret phase to others!!!
            </Text> */}
          </View>

          <TouchableOpacity
            style={{
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

export default InputSecretPhrase;

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

export const BoxTextSelect = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 5,
        paddingLeft: 10,
      }}>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          backgroundColor: COLORS.darkBlues,
          padding: 10,
          marginRight: 15,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 15,
            fontWeight: '400',
          }}>
          1. Safe
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          backgroundColor: COLORS.darkBlues,
          padding: 10,
          marginRight: 15,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 15,
            fontWeight: '400',
          }}>
          1. Safe
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          backgroundColor: COLORS.darkBlues,
          padding: 10,
          marginRight: 15,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 15,
            fontWeight: '400',
          }}>
          1. Safe
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          backgroundColor: COLORS.darkBlues,
          padding: 10,
          marginRight: 15,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 15,
            fontWeight: '400',
          }}>
          1. Safe
        </Text>
      </TouchableOpacity>
    </View>
  );
};
