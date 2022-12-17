import React from 'react';
import {Image, Text, View} from 'react-native';
import search from '../assets/images/search-normal.png';
import add from '../assets/images/add.png';
import {COLORS} from '../constants/theme';

const TokensTab = () => {
  return (
    <View
      style={{
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingRight: 25,
        paddingLeft: 35,
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '400'}}>Tokens</Text>
        <View
          style={{
            width: 55,
            height: 3,
            backgroundColor: COLORS.primary,
            marginTop: 3,
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={search} style={{height: 20, width: 20}} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={add}
            style={{
              height: 33,
              width: 33,
              tintColor: COLORS.black,
              marginLeft: 25,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TokensTab;
