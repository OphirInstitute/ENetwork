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
import scan from '../../assets/images/scan.png';
import note from '../../assets/images/note.png';
import arrowright from '../../assets/images/arrow-right.png';
import send from '../../assets/images/send-2.png';
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
  sendPayIDSchema,
  sendPhoneSchema,
  sendSchema,
  sendWalletAddSchema,
} from '../../util/schema';
import SendBeneficiaries from '../../components/SendBeneficiaries';

const Tab = createMaterialTopTabNavigator();

const Send = () => {
  function renderTabs() {
    return (
      <Tab.Navigator
        style={{backgroundColor: COLORS.white}}
        tabBarOptions={{
          activeTintColor: COLORS.white,
          inactiveTintColor: COLORS.primary,
          style: {
            backgroundColor: COLORS.gray2,
            borderRadius: 10,
            marginHorizontal: 20,
            height: 35,
          },
          labelStyle: {
            fontWeight: '500',
            fontSize: 12,
            fontStyle: 'normal',
            textTransform: 'capitalize',
            textAlign: 'center',
            marginTop: -10,
            letterSpacing: 1,
          },
          indicatorStyle: {
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 35,
            borderRadius: 10,
            elevation: 0,
          },
          // indicatorContainerStyle: {
          //   borderBottomWidth: 1,
          //   borderBottomColor: COLORS.gray,
          //   borderStyle: 'solid',
          // },
        }}>
        <Tab.Screen name="Email" component={EmailTab} />
        <Tab.Screen name="Phone Number" component={PhoneNumberTab} />
        <Tab.Screen name="Pay ID" component={PaymentIDTab} />
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
        backgroundColor: COLORS.white,
      }}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifycontent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <Entypo name="chevron-thin-left" size={25} color="#000" />
          <Text style={{fontWeight: '400', fontSize: 18, marginLeft: 5}}>
            Send
          </Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
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
        backgroundColor: COLORS.white,
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
          height: 80,
          backgroundColor: COLORS.gray2,
          //
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 50,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
            }}>
            DAI
          </Text>
          <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
            Ethereum
          </Text>
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
                fontSize: 22,
                fontWeight: '600',
              }}>
              0.0340DAI
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
              $23,908.89
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={arrowright}
              style={{
                alignSelf: 'center',
                marginLeft: 5,
                marginRight: 10,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
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
                        color: COLORS.textSecondary,
                        fontSize: SIZES.body3,
                      }}>
                      Paste recipient Email
                    </Text>
                  </View>

                  <FormInput
                    value={values.email}
                    containerStyle={{
                      marginTop: -12,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
                    placeholder="Tap to paste"
                    keyboardType="email-address"
                    onBlur={() => setFieldTouched('email')}
                    onChange={handleChange('email')}
                  />

                  {errors.email && touched.email && (
                    <Text style={{fontSize: SIZES.body5, color: COLORS.red}}>
                      {errors.email}
                    </Text>
                  )}
                </>

                <>
                  <FormInput
                    value={values.amount}
                    label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      marginTop: SIZES.radius * 2.5,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
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
                            color: COLORS.black,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
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
                  <Text
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
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text style={{fontSize: 20, marginBottom: 15, fontWeight: '500'}}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 80,
            backgroundColor: COLORS.gray2,
            paddingTop: 13,
            paddingBottom: 5,
            paddingHorizontal: 20,
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
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 20,
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
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 20, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
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
            thumbIconImageSource={sendthumbs}
            disabledThumbIconBackgroundColor="true"
            thumbIconBorderColor={COLORS.primary}
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
        backgroundColor: COLORS.white,
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
          height: 80,
          backgroundColor: COLORS.gray2,
          //
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 50,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
            }}>
            DAI
          </Text>
          <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
            Ethereum
          </Text>
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
                fontSize: 22,
                fontWeight: '600',
              }}>
              0.0340DAI
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
              $23,908.89
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={arrowright}
              style={{
                alignSelf: 'center',
                marginLeft: 5,
                marginRight: 10,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
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
                        color: COLORS.textSecondary,
                        fontSize: SIZES.body3,
                      }}>
                      Input Phone Number
                    </Text>
                  </View>

                  <FormInput
                    value={values.phone_Number}
                    containerStyle={{
                      marginTop: -12,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
                    placeholder="Tap to paste"
                    keyboardType="phone-pad"
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

                <>
                  <FormInput
                    value={values.amount}
                    label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      marginTop: SIZES.radius * 2.5,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
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
                            color: COLORS.black,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
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
                  <Text
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
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text style={{fontSize: 20, marginBottom: 15, fontWeight: '500'}}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 80,
            backgroundColor: COLORS.gray2,
            paddingTop: 13,
            paddingBottom: 5,
            paddingHorizontal: 20,
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
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 20,
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
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 20, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
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
            thumbIconImageSource={sendthumbs}
            disabledThumbIconBackgroundColor="true"
            thumbIconBorderColor={COLORS.primary}
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
        paddingTop: 25,
        padding: 20,
        height: 170,
        backgroundColor: COLORS.white,
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
          height: 70,
          backgroundColor: COLORS.gray2,
          //
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 50,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
            }}>
            DAI
          </Text>
          <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
            Ethereum
          </Text>
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
                fontSize: 22,
                fontWeight: '600',
              }}>
              0.0340DAI
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
              $23,908.89
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={arrowright}
              style={{
                alignSelf: 'center',
                marginLeft: 5,
                marginRight: 10,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: 10}}>
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
                        color: COLORS.textSecondary,
                        fontSize: SIZES.body3,
                      }}>
                      Input app ID
                    </Text>
                  </View>

                  <FormInput
                    value={values.pay_ID}
                    containerStyle={{
                      marginTop: -12,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
                    placeholder="Tap to paste"
                    keyboardType="default"
                    onBlur={() => setFieldTouched('pay_ID')}
                    onChange={handleChange('pay_ID')}
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
                  <TouchableOpacity>
                    <Text
                      style={{
                        alignSelf: 'flex-end',
                        fontSize: 10,
                        fontWeight: '400',
                        color: COLORS.lightGreen,
                      }}>
                      See all beneficiaries
                    </Text>
                  </TouchableOpacity>
                </View>

                <>
                  <FormInput
                    value={values.amount}
                    label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      marginTop: SIZES.radius * 2.5,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
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
                            color: COLORS.black,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
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
                    marginTop: 10,
                  }}>
                  <Text
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
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 5}}>
        <Text style={{fontSize: 20, marginBottom: 15, fontWeight: '500'}}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 75,
            backgroundColor: COLORS.gray2,
            paddingTop: 10,
            paddingBottom: 5,
            paddingHorizontal: 20,
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
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 20,
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
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 20, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
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
            thumbIconImageSource={sendthumbs}
            disabledThumbIconBackgroundColor="true"
            thumbIconBorderColor={COLORS.primary}
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
        backgroundColor: COLORS.white,
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
          height: 80,
          backgroundColor: COLORS.gray2,
          //
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 50,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
            }}>
            DAI
          </Text>
          <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
            Ethereum
          </Text>
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
                fontSize: 22,
                fontWeight: '600',
              }}>
              0.0340DAI
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '500', color: COLORS.gray3}}>
              $23,908.89
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={arrowright}
              style={{
                alignSelf: 'center',
                marginLeft: 5,
                marginRight: 10,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
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
                        color: COLORS.textSecondary,
                        fontSize: SIZES.body3,
                      }}>
                      Paste wallet address
                    </Text>
                  </View>

                  <FormInput
                    value={values.wallet_Address}
                    containerStyle={{
                      marginTop: -12,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
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

                <>
                  <FormInput
                    value={values.amount}
                    label="Enter Amount"
                    placeholder="0.0"
                    containerStyle={{
                      marginTop: SIZES.radius * 2.5,
                    }}
                    inputStyle={{color: COLORS.black, fontSize: 18}}
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
                            color: COLORS.black,
                            fontSize: 18,
                          }}>
                          $
                        </Text>
                      </View>
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
                  <Text
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
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <Text style={{fontSize: 20, marginBottom: 15, fontWeight: '500'}}>
          Summary
        </Text>
        <View
          style={{
            flexDirection: 'column',
            borderRadius: 8,
            height: 80,
            backgroundColor: COLORS.gray2,
            paddingTop: 13,
            paddingBottom: 5,
            paddingHorizontal: 20,
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
              }}>
              Transaction Fee
            </Text>
            <Text
              style={{
                fontSize: 20,
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
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>
              Total Est. Time
            </Text>

            <Text
              style={{fontSize: 20, fontWeight: '600', color: COLORS.lemon}}>
              5 Mins
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
            thumbIconImageSource={sendthumbs}
            disabledThumbIconBackgroundColor="true"
            thumbIconBorderColor={COLORS.primary}
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
