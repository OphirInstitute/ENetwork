import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import search from '../assets/images/search-normal.png';
import add from '../assets/images/add.png';
import bell from '../assets/images/bell.png';
import setting from '../assets/images/setting-4.png';
import {COLORS} from '../constants/theme';

const TokensTab = ({show}) => {
  return (
    <View
      style={{
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingRight: 15,
        paddingLeft: 35,
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        {show !== 'NFT' ? (
          <Text style={{fontSize: 18, fontWeight: '400', color: COLORS.white}}>
            Assets
          </Text>
        ) : (
          <Text style={{fontSize: 18, fontWeight: '400', color: COLORS.white}}>
            NFT
          </Text>
        )}
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
        {show !== 'NFT' ? (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={bell}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white,
                marginLeft: 25,
              }}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
          <Image
            source={setting}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
          <Image
            source={search}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
          <Image
            source={add}
            style={{
              height: 33,
              width: 33,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TokensTab;
