import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/container';
import Header from '../../components/Header';
import CustomInput from '../../components/Input';
import eye from '../../assets/images/eye.png';
import {COLORS} from '../../constants/theme';
import CustomButton from '../../components/CustomButton';

const SignIn = ({navigation}) => {
  return (
    <Container>
      <Header title={'Sign In'} />
      <Text>Input your Login details</Text>

      <View style={{marginTop: 40}}>
        <CustomInput leftLabel={'Email Address'} />
        <CustomInput leftLabel={'Password'} icon={eye} hasIcon />
        <TouchableOpacity>
          <Text style={{color: COLORS.secondary, padding: 5}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 80}}>
        <CustomButton onPress={() => navigation.navigate('Import')} />
        <View style={{flexDirection: 'row', alignSelf: 'center', padding: 10}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.secondary}}> Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SignIn;
