import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/container';
import welcome from '../../assets/images/welcome.png';
import {COLORS} from '../../constants/theme';
import CustomButton from '../../components/CustomButton';

const Welcome = ({navigation}) => {
  return (
    // <Container>
    <View style={{backgroundColor: COLORS.white, flex: 1, padding: 10}}>
      <Image source={welcome} resizeMode="cover" />
      <View style={{alignItems: 'center'}}>
        <Text
          style={{color: COLORS.primary, fontSize: 35, textAlign: 'center'}}>
          Crypto
        </Text>
        <Text
          style={{color: COLORS.primary, fontSize: 35, textAlign: 'center'}}>
          at your
        </Text>
        <Text
          style={{color: COLORS.primary, fontSize: 35, textAlign: 'center'}}>
          FingerTips
        </Text>
      </View>
      <View
        style={{
          width: '70%',
          padding: 10,
          alignSelf: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 16}}>
          Over 10,000 coin in your Pocket, send, recieve, Pay, Exchange
          Different Currencies anytime, anywhere
        </Text>
      </View>
      <View style={{marginTop: 1}}>
        <CustomButton
          title="Create account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>

      <View style={{flexDirection: 'row', padding: 10, alignSelf: 'center'}}>
        <Text style={{fontSize: 18}}>I have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontSize: 18, color: COLORS.secondary}}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </Container>
  );
};

export default Welcome;
