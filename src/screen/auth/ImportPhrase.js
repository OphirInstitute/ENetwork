import React from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/container';
import Header from '../../components/Header';
import {COLORS} from '../../constants/theme';

const ImportPhrase = () => {
  return (
    <Container>
      <View>
        <Header title={'Import Phrase'} />
      </View>
      <Text>Create your 4 -digit Security Pin</Text>
      <View style={{marginTop: 20}}>
        <View
          style={{
            backgroundColor: COLORS.gray,
            width: '100%',
            height: 160,
            justifyContent: 'center',
            alignSelf: 'center',
          }}></View>
      </View>
    </Container>
  );
};

export default ImportPhrase;
