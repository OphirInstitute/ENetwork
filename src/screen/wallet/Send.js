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
import send from '../../assets/images/send-2.png';
import sendthumbsB from '../../assets/images/sendthumbsB.png';
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
  sendPayIDSchema,
  sendPhoneSchema,
  sendSchema,
  sendWalletAddSchema,
} from '../../util/schema';
import SendBeneficiaries from '../../components/SendBeneficiaries';

const Tab = createMaterialTopTabNavigator();

const Send = ({navigation}) => {
  function renderTabs() {
    return (
      <Tab.Navigator
        // style={{backgroundColor: COLORS.black}}
        tabBarOptions={{
          activeTintColor: COLORS.white,
          inactiveTintColor: COLORS.gray5,
          tabStyle: {
            borderWidth: 1,
            borderColor: COLORS.gray5,
            borderRadius: 15,
            padding: 0,
            // marginHorizontal: 20,
            // alignItems: 'center',
            // justifyContent: 'center',
          },
          style: {
            backgroundColor: COLORS.black,
            borderRadius: 10,
            marginHorizontal: 20,
            // height: 35,
          },
          labelStyle: {
            fontWeight: '500',
            fontSize: 12,
            fontStyle: 'normal',
            textTransform: 'capitalize',
            textAlign: 'center',
            // margin: -10,
            // marginTop: -10,
            // letterSpacing: 1,
          },
          indicatorStyle: {
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 45,
            borderRadius: 15,
            elevation: 0,
          },
          // indicatorContainerStyle: {
          //   borderBottomWidth: 1,
          //   borderBottomColor: COLORS.gray,
          //   borderStyle: 'solid',
          // },
        }}>
        <Tab.Screen name="Email" component={EmailTab} />
        {/* <Tab.Screen name="Phone" component={PhoneNumberTab} /> */}
        <Tab.Screen name="Phone Number" component={PhoneNumberTab} />
        <Tab.Screen name="Pay ID" component={PaymentIDTab} />
        {/* <Tab.Screen name="address" component={WalletAddressTab} /> */}
        <Tab.Screen name="Wallet address" component={WalletAddressTab} />
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
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 5,
              color: COLORS.white,
            }}>
            Send
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
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          paddingTop: 8,
        }}>
        {renderTabs()}
      </View>
    </View>
  );
};

export default Send;

export const EmailTab = () => {
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
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
          paddingHorizontal: 15,
          borderRadius: 8,
          height: 80,
          backgroundColor: COLORS.darkBlues,
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginHorizontal: 10,
          }}>
          <Image source={dai} style={{height: 35, width: 35, marginRight: 5}} />
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLORS.white,
                }}>
                DAI
              </Text>
              <Image
                source={arrowright}
                style={{
                  alignSelf: 'center',
                  marginLeft: 5,
                  height: 20,
                  width: 20,
                }}
              />
            </View>
            <Text
              style={{fontSize: 13, fontWeight: '400', color: COLORS.gray3}}>
              Ethereum
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
                textAlign: 'right',
              }}>
              Available
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
                // flex: 1,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
                600,000.89
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: COLORS.white,
                  marginTop: 2,
                }}>
                DAI
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 15}}>
        <Formik
          validateOnMount={true}
          validationSchema={sendSchema}
          initialValues={{email: '', amount: '', loginWithEmail: true}}
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
                }}>
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: SIZES.radius,
                    }}>
                    <Text
                      style={{
                        color: COLORS.gray4,
                        fontSize: SIZES.body3,
                        marginBottom: 5,
                      }}>
                      Paste recipient Email
                    </Text>
                  </View>

                  <FormInput
                    value={values.email}
                    containerStyle={{
                      marginTop: -12,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{
                      color: COLORS.gray5,
                      fontSize: 18,
                    }}
                    placeholder="Tap to paste"
                    keyboardType="default"
                    onBlur={() => setFieldTouched('email')}
                    onChange={handleChange('email')}
                    // appendComponent={
                    //   <TouchableOpacity
                    //     style={{
                    //       width: 40,
                    //       alignItems: 'flex-end',
                    //       justifyContent: 'center',
                    //     }}
                    //     // onPress={() => setShowPass(!showPass)}
                    //   >
                    //     <Image source={note} style={{width: 20, height: 20}} />
                    //   </TouchableOpacity>
                    // }
                  />

                  {errors.email && touched.email && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.email}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    marginTop: 15,
                    marginBottom: -20,
                    flexDirection: 'column',
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        // alignSelf: 'flex-end',
                        fontSize: 10,
                        fontWeight: '400',
                        color: COLORS.lightGreen,
                        marginBottom: 5,
                      }}>
                      Recent transactions
                    </Text>
                  </TouchableOpacity>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                      flexDirection: 'row',
                    }}>
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                  </ScrollView>
                </View>

                <>
                  <Text
                    style={{
                      color: COLORS.gray4,
                      fontSize: SIZES.body3,
                      marginTop: SIZES.radius * 2.5,
                      marginBottom: 5,
                    }}>
                    Enter Amount
                  </Text>

                  <FormInput
                    value={values.amount}
                    // label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      // marginTop: -12,
                      // // marginTop: SIZES.radius * 2.5,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{color: COLORS.gray5, fontSize: 18}}
                    keyboardType="default"
                    onBlur={() => setFieldTouched('amount')}
                    onChange={handleChange('amount')}
                    prependComponent={
                      <View
                        style={{
                          width: 15,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.gray5,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
                    }
                    appendComponent={
                      <TouchableOpacity
                        style={{
                          width: 27,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.lemon,
                            fontSize: 12,
                          }}>
                          MAX
                        </Text>
                      </TouchableOpacity>
                    }
                  />

                  {errors.amount && touched.amount && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.amount}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: SIZES.radius,
                  }}>
                  {/* <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    ≈0.00459 ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    Balance : 0.459 ETH
                  </Text> */}
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            fontWeight: '500',
            color: COLORS.gray4,
          }}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 90,
            backgroundColor: COLORS.darkPurple,
            paddingTop: 13,
            paddingBottom: 15,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: COLORS.gray5,
            borderStyle: 'dashed',
            //
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: COLORS.lemon,
              }}>
              $0.09
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Receive amount
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              0.00 DAI
            </Text>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SwipeButton
            // disabled={disableCBButton}
            title="Swipe to confirm transaction"
            titleColor={COLORS.white}
            titleFontSize={16}
            width={'90%'}
            thumbIconImageSource={sendthumbsB}
            disabledThumbIconBackgroundColor="true"
            // thumbIconBorderColor={COLORS.primary}
            disabledThumbIconBorderColor="true"
            railBackgroundColor={COLORS.primary}
            railBorderColor={COLORS.primary}
            railFillBorderColor={COLORS.primary}
            onSwipeSuccess={() => console.warn('swipe')}
            railFillBackgroundColor={COLORS.secondary}
            // disabledThumbIconBorderColor="true"
          />
        </View>
      </View>
    </View>
  );
};

export const PhoneNumberTab = () => {
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
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
          paddingHorizontal: 15,
          borderRadius: 8,
          height: 80,
          backgroundColor: COLORS.darkBlues,
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginHorizontal: 10,
          }}>
          <Image source={dai} style={{height: 35, width: 35, marginRight: 5}} />
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLORS.white,
                }}>
                DAI
              </Text>
              <Image
                source={arrowright}
                style={{
                  alignSelf: 'center',
                  marginLeft: 5,
                  height: 20,
                  width: 20,
                }}
              />
            </View>
            <Text
              style={{fontSize: 13, fontWeight: '400', color: COLORS.gray3}}>
              Ethereum
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
                textAlign: 'right',
              }}>
              Available
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
                // flex: 1,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
                600,000.89
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: COLORS.white,
                  marginTop: 2,
                }}>
                DAI
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 15}}>
        <Formik
          validateOnMount={true}
          validationSchema={sendPhoneSchema}
          initialValues={{phone_Number: '', amount: '', loginWithPhone: true}}
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
                }}>
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: SIZES.radius,
                    }}>
                    <Text
                      style={{
                        color: COLORS.gray4,
                        fontSize: SIZES.body3,
                        marginBottom: 5,
                      }}>
                      Input Phone Number
                    </Text>
                  </View>

                  <FormInput
                    value={values.phone_Number}
                    containerStyle={{
                      marginTop: -12,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{
                      color: COLORS.gray5,
                      fontSize: 18,
                    }}
                    placeholder="Tap to paste"
                    keyboardType="default"
                    onBlur={() => setFieldTouched('phone_Number')}
                    onChange={handleChange('phone_Number')}
                    appendComponent={
                      <TouchableOpacity
                        style={{
                          width: 40,
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}
                        // onPress={() => setShowPass(!showPass)}
                      >
                        <Image source={note} style={{width: 20, height: 20}} />
                      </TouchableOpacity>
                    }
                  />

                  {errors.phone_Number && touched.phone_Number && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.phone_Number}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    marginTop: 15,
                    marginBottom: -20,
                    flexDirection: 'column',
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        // alignSelf: 'flex-end',
                        fontSize: 10,
                        fontWeight: '400',
                        color: COLORS.lightGreen,
                        marginBottom: 5,
                      }}>
                      Recent transactions
                    </Text>
                  </TouchableOpacity>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                      flexDirection: 'row',
                    }}>
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                  </ScrollView>
                </View>

                <>
                  <Text
                    style={{
                      color: COLORS.gray4,
                      fontSize: SIZES.body3,
                      marginTop: SIZES.radius * 2.5,
                      marginBottom: 5,
                    }}>
                    Enter Amount
                  </Text>

                  <FormInput
                    value={values.amount}
                    // label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      // marginTop: -12,
                      // // marginTop: SIZES.radius * 2.5,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{color: COLORS.gray5, fontSize: 18}}
                    keyboardType="default"
                    onBlur={() => setFieldTouched('amount')}
                    onChange={handleChange('amount')}
                    prependComponent={
                      <View
                        style={{
                          width: 15,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.gray5,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
                    }
                    appendComponent={
                      <TouchableOpacity
                        style={{
                          width: 27,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.lemon,
                            fontSize: 12,
                          }}>
                          MAX
                        </Text>
                      </TouchableOpacity>
                    }
                  />

                  {errors.amount && touched.amount && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.amount}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: SIZES.radius,
                  }}>
                  {/* <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    ≈0.00459 ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    Balance : 0.459 ETH
                  </Text> */}
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            fontWeight: '500',
            color: COLORS.gray4,
          }}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 90,
            backgroundColor: COLORS.darkPurple,
            paddingTop: 13,
            paddingBottom: 15,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: COLORS.gray5,
            borderStyle: 'dashed',
            //
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: COLORS.lemon,
              }}>
              $0.09
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Receive amount
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              0.00 DAI
            </Text>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SwipeButton
            // disabled={disableCBButton}
            title="Swipe to confirm transaction"
            titleColor={COLORS.white}
            titleFontSize={16}
            width={'90%'}
            thumbIconImageSource={sendthumbsB}
            disabledThumbIconBackgroundColor="true"
            // thumbIconBorderColor={COLORS.primary}
            disabledThumbIconBorderColor="true"
            railBackgroundColor={COLORS.primary}
            railBorderColor={COLORS.primary}
            railFillBorderColor={COLORS.primary}
            onSwipeSuccess={() => console.warn('swipe')}
            railFillBackgroundColor={COLORS.secondary}
            // disabledThumbIconBorderColor="true"
          />
        </View>
      </View>
    </View>
  );
};

export const PaymentIDTab = () => {
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
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
          paddingHorizontal: 15,
          borderRadius: 8,
          height: 80,
          backgroundColor: COLORS.darkBlues,
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginHorizontal: 10,
          }}>
          <Image source={dai} style={{height: 35, width: 35, marginRight: 5}} />
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLORS.white,
                }}>
                DAI
              </Text>
              <Image
                source={arrowright}
                style={{
                  alignSelf: 'center',
                  marginLeft: 5,
                  height: 20,
                  width: 20,
                }}
              />
            </View>
            <Text
              style={{fontSize: 13, fontWeight: '400', color: COLORS.gray3}}>
              Ethereum
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
                textAlign: 'right',
              }}>
              Available
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
                // flex: 1,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
                600,000.89
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: COLORS.white,
                  marginTop: 2,
                }}>
                DAI
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 15}}>
        <Formik
          validateOnMount={true}
          validationSchema={sendPayIDSchema}
          initialValues={{
            pay_ID: '',
            amount: '',
            payIDVerify: true,
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
                }}>
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: SIZES.radius,
                    }}>
                    <Text
                      style={{
                        color: COLORS.gray4,
                        fontSize: SIZES.body3,
                        marginBottom: 5,
                      }}>
                      Input app ID
                    </Text>
                  </View>

                  <FormInput
                    value={values.pay_ID}
                    containerStyle={{
                      marginTop: -12,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{
                      color: COLORS.gray5,
                      fontSize: 18,
                    }}
                    placeholder="Tap to paste"
                    keyboardType="default"
                    onBlur={() => setFieldTouched('pay_ID')}
                    onChange={handleChange('pay_ID')}
                    // appendComponent={
                    //   <TouchableOpacity
                    //     style={{
                    //       width: 40,
                    //       alignItems: 'flex-end',
                    //       justifyContent: 'center',
                    //     }}
                    //     // onPress={() => setShowPass(!showPass)}
                    //   >
                    //     <Image source={scan} style={{width: 20, height: 20}} />
                    //   </TouchableOpacity>
                    // }
                  />

                  {errors.pay_ID && touched.pay_ID && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.pay_ID}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    marginTop: 15,
                    marginBottom: -20,
                    flexDirection: 'column',
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        // alignSelf: 'flex-end',
                        fontSize: 10,
                        fontWeight: '400',
                        color: COLORS.lightGreen,
                        marginBottom: 5,
                      }}>
                      Recent transactions
                    </Text>
                  </TouchableOpacity>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                      flexDirection: 'row',
                    }}>
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                  </ScrollView>
                </View>

                <>
                  <Text
                    style={{
                      color: COLORS.gray4,
                      fontSize: SIZES.body3,
                      marginTop: SIZES.radius * 2.5,
                      marginBottom: 5,
                    }}>
                    Enter Amount
                  </Text>

                  <FormInput
                    value={values.amount}
                    // label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      // marginTop: -12,
                      // // marginTop: SIZES.radius * 2.5,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{color: COLORS.gray5, fontSize: 18}}
                    keyboardType="default"
                    onBlur={() => setFieldTouched('amount')}
                    onChange={handleChange('amount')}
                    prependComponent={
                      <View
                        style={{
                          width: 15,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.gray5,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
                    }
                    appendComponent={
                      <TouchableOpacity
                        style={{
                          width: 27,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.lemon,
                            fontSize: 12,
                          }}>
                          MAX
                        </Text>
                      </TouchableOpacity>
                    }
                  />

                  {errors.amount && touched.amount && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.amount}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: SIZES.radius,
                  }}>
                  {/* <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    ≈0.00459 ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    Balance : 0.459 ETH
                  </Text> */}
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            fontWeight: '500',
            color: COLORS.gray4,
          }}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 90,
            backgroundColor: COLORS.darkPurple,
            paddingTop: 13,
            paddingBottom: 15,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: COLORS.gray5,
            borderStyle: 'dashed',
            //
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: COLORS.lemon,
              }}>
              $0.09
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Receive amount
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              0.00 DAI
            </Text>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SwipeButton
            // disabled={disableCBButton}
            title="Swipe to confirm transaction"
            titleColor={COLORS.white}
            titleFontSize={16}
            width={'90%'}
            thumbIconImageSource={sendthumbsB}
            disabledThumbIconBackgroundColor="true"
            // thumbIconBorderColor={COLORS.primary}
            disabledThumbIconBorderColor="true"
            railBackgroundColor={COLORS.primary}
            railBorderColor={COLORS.primary}
            railFillBorderColor={COLORS.primary}
            onSwipeSuccess={() => console.warn('swipe')}
            railFillBackgroundColor={COLORS.secondary}
            // disabledThumbIconBorderColor="true"
          />
        </View>
      </View>
    </View>
  );
};

export const WalletAddressTab = () => {
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
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
          paddingHorizontal: 15,
          borderRadius: 8,
          height: 80,
          backgroundColor: COLORS.darkBlues,
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginHorizontal: 10,
          }}>
          <Image source={dai} style={{height: 35, width: 35, marginRight: 5}} />
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLORS.white,
                }}>
                DAI
              </Text>
              <Image
                source={arrowright}
                style={{
                  alignSelf: 'center',
                  marginLeft: 5,
                  height: 20,
                  width: 20,
                }}
              />
            </View>
            <Text
              style={{fontSize: 13, fontWeight: '400', color: COLORS.gray3}}>
              Ethereum
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
                textAlign: 'right',
              }}>
              Available
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
                // flex: 1,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
                600,000.89
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: COLORS.white,
                  marginTop: 2,
                }}>
                DAI
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 15}}>
        <Formik
          validateOnMount={true}
          validationSchema={sendWalletAddSchema}
          initialValues={{
            wallet_Address: '',
            amount: '',
            walletAddVerify: true,
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
                }}>
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: SIZES.radius,
                    }}>
                    <Text
                      style={{
                        color: COLORS.gray4,
                        fontSize: SIZES.body3,
                        marginBottom: 5,
                      }}>
                      Paste wallet address
                    </Text>
                  </View>

                  <FormInput
                    value={values.wallet_Address}
                    containerStyle={{
                      marginTop: -12,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{
                      color: COLORS.gray5,
                      fontSize: 18,
                    }}
                    placeholder="Tap to paste"
                    keyboardType="default"
                    onBlur={() => setFieldTouched('wallet_Address')}
                    onChange={handleChange('wallet_Address')}
                    appendComponent={
                      <TouchableOpacity
                        style={{
                          width: 40,
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}
                        // onPress={() => setShowPass(!showPass)}
                      >
                        <Image source={scan} style={{width: 20, height: 20}} />
                      </TouchableOpacity>
                    }
                  />

                  {errors.wallet_Address && touched.wallet_Address && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.wallet_Address}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    marginTop: 15,
                    marginBottom: -20,
                    flexDirection: 'column',
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        // alignSelf: 'flex-end',
                        fontSize: 10,
                        fontWeight: '400',
                        color: COLORS.lightGreen,
                        marginBottom: 5,
                      }}>
                      Recent transactions
                    </Text>
                  </TouchableOpacity>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                      flexDirection: 'row',
                    }}>
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                    <SendBeneficiaries />
                  </ScrollView>
                </View>

                <>
                  <Text
                    style={{
                      color: COLORS.gray4,
                      fontSize: SIZES.body3,
                      marginTop: SIZES.radius * 2.5,
                      marginBottom: 5,
                    }}>
                    Enter Amount
                  </Text>

                  <FormInput
                    value={values.amount}
                    // label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      // marginTop: -12,
                      // // marginTop: SIZES.radius * 2.5,
                      borderWidth: 1,
                      borderColor: COLORS.gray5,
                      borderRadius: 5,
                    }}
                    inputStyle={{color: COLORS.gray5, fontSize: 18}}
                    keyboardType="default"
                    onBlur={() => setFieldTouched('amount')}
                    onChange={handleChange('amount')}
                    prependComponent={
                      <View
                        style={{
                          width: 15,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.gray5,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
                    }
                    appendComponent={
                      <TouchableOpacity
                        style={{
                          width: 27,
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.lemon,
                            fontSize: 12,
                          }}>
                          MAX
                        </Text>
                      </TouchableOpacity>
                    }
                  />

                  {errors.amount && touched.amount && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.amount}
                    </Text>
                  )}
                </>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: SIZES.radius,
                  }}>
                  {/* <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    ≈0.00459 ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: COLORS.primary,
                    }}>
                    Balance : 0.459 ETH
                  </Text> */}
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 5,
            fontWeight: '500',
            color: COLORS.gray4,
          }}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 90,
            backgroundColor: COLORS.darkPurple,
            paddingTop: 13,
            paddingBottom: 15,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: COLORS.gray5,
            borderStyle: 'dashed',
            //
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
              // backgroundColor: 'red',
              // flex: 1,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                color: COLORS.white,
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: COLORS.lemon,
              }}>
              $0.09
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              paddingBottom: 5,
            }}>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: COLORS.white}}>
              Receive amount
            </Text>

            <Text
              style={{fontSize: 15, fontWeight: '600', color: COLORS.lemon}}>
              0.00 DAI
            </Text>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SwipeButton
            // disabled={disableCBButton}
            title="Swipe to confirm transaction"
            titleColor={COLORS.white}
            titleFontSize={16}
            width={'90%'}
            thumbIconImageSource={sendthumbsB}
            disabledThumbIconBackgroundColor="true"
            // thumbIconBorderColor={COLORS.primary}
            disabledThumbIconBorderColor="true"
            railBackgroundColor={COLORS.primary}
            railBorderColor={COLORS.primary}
            railFillBorderColor={COLORS.primary}
            onSwipeSuccess={() => console.warn('swipe')}
            railFillBackgroundColor={COLORS.secondary}
            // disabledThumbIconBorderColor="true"
          />
        </View>
      </View>
    </View>
  );
};
