import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/container';
import CustomInput from '../../components/Input';
import openEye from '../../assets/images/eye.png';
import canceal from '../../assets/images/canceal.png';
import CustomButton from '../../components/CustomButton';
import {COLORS} from '../../constants/theme';
import Header from '../../components/Header';

const SignUp = ({navigation}) => {
  return (
    <Container>
      <Header title={'Create account'} />

      <Text>Please fill in this form to create account</Text>
      <CustomInput
        leftLabel={'Email Address'}
        placeholder="Enter Email address"
      />
      <CustomInput
        leftLabel={'Phone Number'}
        placeholder="enter phone number"
      />
      <CustomInput
        leftLabel={'Password'}
        hasIcon
        icon={openEye}
        placeholder="********"
      />
      <CustomInput
        leftLabel={'Confirm Password'}
        hasIcon
        icon={openEye}
        placeholder="********"
      />

      <View style={{marginTop: 60}}>
        <CustomButton onPress={() => navigation.navigate('Import')} />
      </View>
      <View style={{alignSelf: 'center', padding: 15}}>
        <Text style={{textAlign: 'center', fontSize: 13, padding: 5}}>
          By Pressing Sign Up securely, you aggree to our{' '}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                color: COLORS.secondary,
              }}>
              Terms & conditions and Policy
            </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize: 13}}> and </Text>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                color: COLORS.secondary,
              }}>
              Policy
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', fontSize: 13, padding: 5}}>
          Your data will be securely encrypted with us
        </Text>
      </View>
    </Container>
  );
};

export default SignUp;
