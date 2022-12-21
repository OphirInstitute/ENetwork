import {View, Text, Image} from 'react-native';
import React from 'react';
import passport from '../assets/images/passport.png';
import {COLORS} from '../constants/theme';

const SendBeneficiaries = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginRight: 10,
        // flex: 1,
        // justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Image
        source={passport}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          width: 50,
        }}
      />

      <Text
        style={{
          marginTop: 5,
          color: COLORS.white,
          fontSize: 10,
          fontWeight: '400',
        }}>
        Micheal
      </Text>
    </View>
  );
};

export default SendBeneficiaries;
