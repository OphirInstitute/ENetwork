import React, {useState} from 'react';
import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import fire from '../assets/images/fire.png';
import search from '../assets/images/search.png';
import arrow from '../assets/images/arrow.png';
import bitcoin from '../assets/images/bitcoin.png';
import eth from '../assets/images/eth.png';
import bnb from '../assets/images/bnb.png';
import arrowDown from '../assets/images/arrow-down.png';

export default function CurrencySearch({
  placeholder,
  onChangeText,
  value,
  width,
  style,
  inputStyle,
}) {
  const [showSearch, setShowSearch] = useState(true);
  const handleShowSearch = prev => {
    setShowSearch(!prev);
  };
  return (
    <View
      style={{
        // flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        // justifyContent: 'space-between',
      }}>
      {showSearch ? (
        <View
          style={{
            backgroundColor: COLORS.darkBlues,
            height: 45,
            width: width || 'auto',
            marginHorizontal: 7,
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 40,
            flex: 1,
            // ...style,
          }}>
          <View style={{paddingLeft: 20, paddingRight: 10}}>
            <Image source={search} style={{height: 20, width: 20}} />
          </View>
          <TextInput
            style={{
              ...inputStyle,
            }}
            placeholder={'Search favourite coins'}
            placeholderTextColor={COLORS.gray4}
            keyboardType="default"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      ) : null}
    </View>
  );
}
