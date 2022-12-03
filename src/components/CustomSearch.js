import React, {useState} from 'react';
import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import fire from '../assets/images/fire.png';
import search from '../assets/images/search-normal.png';
import arrow from '../assets/images/arrow.png';
import bitcoin from '../assets/images/bitcoin.png';
import eth from '../assets/images/eth.png';
import bnb from '../assets/images/bnb.png';
import arrowDown from '../assets/images/arrow-down.png';

export default function CustomSearch({
  placeholder,
  onChangeText,
  value,
  width,
  style,
  inputStyle,
}) {
  const [showSearch, setShowSearch] = useState(false);
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
      <View style={{justifyContent: 'center'}}>
        <Image source={fire} style={{height: 30, width: 30}} />
      </View>

      {showSearch ? (
        <View
          style={{
            backgroundColor: COLORS.black,
            height: 45,
            width: width || 'auto',
            marginHorizontal: 7,
            justifyContent: 'center',
            borderRadius: 40,
            flex: 1,
            // ...style,
          }}>
          <TextInput
            style={{
              paddingLeft: SIZES.padding,
              color: COLORS.gray2,
              ...inputStyle,
            }}
            placeholder={'search coin'}
            placeholderTextColor={COLORS.gray2}
            keyboardType="default"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: COLORS.black,
            height: 45,
            width: width || 'auto',
            marginHorizontal: 7,
            justifyContent: 'center',
            borderRadius: 40,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 8,
            }}>
            <Text style={{color: COLORS.gray}}>#</Text>
            <Image source={arrow} />
            <Text style={{color: COLORS.white}}>BTC</Text>
            <Image source={bitcoin} style={{height: 25, width: 25}} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: COLORS.gray}}>#</Text>
            <Image source={arrow} />
            <Text style={{color: COLORS.white}}>ETH</Text>
            <Image source={eth} style={{height: 20, width: 20}} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 8,
            }}>
            <Text style={{color: COLORS.gray}}>#</Text>
            <Image source={arrowDown} />
            <Text style={{color: COLORS.white}}>BNB</Text>
            <Image source={bnb} style={{height: 20, width: 20}} />
          </View>
        </View>
      )}

      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => handleShowSearch(showSearch)}>
          <Image source={search} style={{height: 25, width: 25}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
