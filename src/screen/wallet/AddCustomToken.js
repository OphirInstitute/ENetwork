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
  addTokenSchema,
  sendPayIDSchema,
  sendPhoneSchema,
  sendSchema,
  sendWalletAddSchema,
} from '../../util/schema';
import SendBeneficiaries from '../../components/SendBeneficiaries';
import FormInputPlain from '../../components/FormInputPlain';

const Tab = createMaterialTopTabNavigator();

const AddCustomToken = ({navigation}) => {
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
    <View
      style={{
        // padding: 10,
        flex: 1,
        marginTop: StatusBarHeight,
        backgroundColor: COLORS.black,
        // backgroundColor: COLORS.white,
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
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              marginLeft: 5,
              color: COLORS.white,
            }}>
            Add Custom Token
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                marginLeft: 5,
                color: COLORS.lemon,
              }}>
              Save
            </Text>
          </TouchableOpacity>
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
            padding: 20,
            height: 170,
            backgroundColor: COLORS.black,
          }}>
          <FailureModal
            isModalVisible={error.status}
            closeModal={closeFailureModal}
            message={error.message}
          />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              height: 50,
              backgroundColor: COLORS.darkBlues,
              paddingHorizontal: 20,
              //
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
              }}>
              Network
            </Text>

            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.navigate('NetworkWallet')}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: COLORS.gray4,
                  marginRight: 15,
                }}>
                Binance
              </Text>
              <Text
                style={{
                  color: COLORS.gray4,
                  // marginLeft: 5,
                  // marginRight: 10,
                }}>
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 15}}>
            <Formik
              validateOnMount={true}
              validationSchema={addTokenSchema}
              initialValues={{
                address: '',
                name: '',
                symbols: '',
                decimals: '',
                addTokenVerify: true,
              }}
              innerRef={r => (formikRef = r)}
              onSubmit={handleLogin}>
              {({
                handleChange,
                handleSubmit,
                values,
                isValid,
                setFieldTouched,
                errors,
                touched,
              }) => (
                <>
                  <View
                    style={{
                      marginTop: SIZES.padding / 2,
                      borderRadius: 8, //TODO
                      // backgroundColor: COLORS.gray2,
                      backgroundColor: COLORS.darkBlues,
                    }}>
                    <>
                      <FormInputPlain
                        // label="Contact Address"
                        value={values.address}
                        containerStyle={
                          {
                            // marginTop: -12,
                          }
                        }
                        inputStyle={{
                          color: COLORS.white,
                          fontSize: 18,
                        }}
                        placeholder="Contact Address"
                        keyboardType="email-address"
                        onBlur={() => setFieldTouched('email')}
                        onChange={handleChange('email')}
                        appendComponent={
                          <TouchableOpacity
                            style={{
                              width: 40,
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                            }}
                            // onPress={() => setShowPass(!showPass)}
                          >
                            {/* <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '400',
                                // marginLeft: -10,
                              }}>
                              Paste
                            </Text> */}
                            <Image
                              source={scan}
                              color="#01EBD5"
                              style={{width: 30, height: 30}}
                            />
                          </TouchableOpacity>
                        }
                      />

                      {/* {errors.email && touched.email && (
                        <Text
                          style={{fontSize: SIZES.body5, color: COLORS.red}}>
                          {errors.email}
                        </Text>
                      )} */}
                    </>

                    <>
                      <FormInputPlain
                        value={values.name}
                        // label="Enter Amount"
                        placeholder="Name"
                        containerStyle={
                          {
                            // marginTop: -12,
                            // marginTop: SIZES.radius * 2.5,
                          }
                        }
                        inputStyle={{
                          color: COLORS.white,
                          fontSize: 18,
                        }}
                        keyboardType="default"
                        onBlur={() => setFieldTouched('amount')}
                        onChange={handleChange('amount')}
                        appendComponent={
                          <TouchableOpacity
                            style={{
                              width: 40,
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                            }}
                            // onPress={() => setShowPass(!showPass)}
                          >
                            {/* <Image
                              source={note}
                              style={{width: 20, height: 20}}
                            /> */}
                          </TouchableOpacity>
                        }
                      />

                      {/* {errors.amount && touched.amount && (
                        <Text
                          style={{fontSize: SIZES.body5, color: COLORS.red}}>
                          {errors.amount}
                        </Text>
                      )} */}
                    </>
                    <>
                      <FormInputPlain
                        value={values.symbols}
                        // label="Enter Amount"
                        placeholder="Symbols"
                        containerStyle={
                          {
                            // marginTop: -12,
                            // marginTop: SIZES.radius * 2.5,
                          }
                        }
                        inputStyle={{
                          color: COLORS.white,
                          fontSize: 18,
                        }}
                        keyboardType="default"
                        onBlur={() => setFieldTouched('amount')}
                        onChange={handleChange('amount')}
                        appendComponent={
                          <TouchableOpacity
                            style={{
                              width: 40,
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                            }}
                            // onPress={() => setShowPass(!showPass)}
                          >
                            {/* <Image
                              source={note}
                              style={{width: 20, height: 20}}
                            /> */}
                          </TouchableOpacity>
                        }
                      />

                      {/* {errors.amount && touched.amount && (
                        <Text
                          style={{fontSize: SIZES.body5, color: COLORS.red}}>
                          {errors.amount}
                        </Text>
                      )} */}
                    </>
                    <>
                      <FormInputPlain
                        value={values.decimals}
                        // label="Enter Amount"
                        placeholder="Decimals"
                        containerStyle={
                          {
                            // marginTop: -12,
                            // marginTop: SIZES.radius * 2.5,
                          }
                        }
                        inputStyle={{
                          color: COLORS.white,
                          fontSize: 18,
                        }}
                        keyboardType="default"
                        onBlur={() => setFieldTouched('amount')}
                        onChange={handleChange('amount')}
                        appendComponent={
                          <TouchableOpacity
                            style={{
                              width: 40,
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                            }}
                            // onPress={() => setShowPass(!showPass)}
                          >
                            {/* <Image
                              source={note}
                              style={{width: 20, height: 20}}
                            /> */}
                          </TouchableOpacity>
                        }
                      />

                      {/* {errors.amount && touched.amount && (
                        <Text
                          style={{fontSize: SIZES.body5, color: COLORS.red}}>
                          {errors.amount}
                        </Text>
                      )} */}
                    </>
                  </View>
                </>
              )}
            </Formik>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              height: 100,
              backgroundColor: 'rgba(243, 85, 85, 0.15)',
              marginVertical: 30,
              alignItems: 'center',
              // paddingTop: 13,
              // paddingBottom: 5,
              paddingHorizontal: 30,
              //
            }}>
            <Image
              source={vector}
              style={{
                // alignSelf: 'center',
                // marginLeft: 5,
                marginRight: 10,
                width: 30,
                height: 38,
              }}
            />
            <Text
              style={{
                color: COLORS.red,
                fontSize: 12,
                fontWeight: '400',
                textAlign: 'left',
                flexShrink: 1,
                flexWrap: 'wrap',
                lineHeight: 18,
              }}>
              Anyone can create a token, including fake versions of existing
              tokens. Learn about Scams and security risk and management.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddCustomToken;
