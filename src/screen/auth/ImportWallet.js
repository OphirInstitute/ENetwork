import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/container';
import Header from '../../components/Header';
import {COLORS} from '../../constants/theme';

const ImportWallet = ({navigation}) => {
  return (
    <Container>
      <Header />

      <View style={{paddingTop: 80}}>
        <View>
          <TouchableOpacity
            style={{marginVertical: 20}}
            onPress={() => navigation.navigate('ImportPhrase')}>
            <View
              style={{
                backgroundColor: COLORS.gray,
                padding: 20,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                Import Wallet
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.gray,
                padding: 20,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                Create Wallet
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default ImportWallet;
