import React from 'react';
import {Image, Text, View} from 'react-native';
import arrowUp1 from '../assets/images/arrow-up1.png';
import arrowUp2 from '../assets/images/arrow-up3.png';
import {useTheme} from '@react-navigation/native';

const MarketTab = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: colors.text}}>Coin/Vol</Text>
        <Image source={arrowUp1} style={{height: 20, width: 20}} />
      </View>
      <View>
        <Text> {'               '}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={arrowUp2} style={{height: 20, width: 20}} />
        <Text style={{fontSize: 16, color: colors.text}}>Price</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={arrowUp1} style={{height: 20, width: 20}} />
        <Text style={{fontSize: 14, color: colors.text}}>24HR %</Text>
      </View>
    </View>
  );
};

export default MarketTab;
