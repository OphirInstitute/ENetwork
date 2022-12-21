import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import bitcoin from '../assets/images/Cryptocurrency.png';
import arrow from '../assets/images/arrow.png';
import check from '../assets/images/check.png';
import arrowDown from '../assets/images/arrow-down.png';
import greenGraph from '../assets/images/greenGraph.png';
import {COLORS} from '../constants/theme';

const NetworkRow = ({show, coin, img, perecentage}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginLeft: 15,
          }}>
          <Image source={img} style={{height: 25, width: 25}} />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.darkBlues,
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // padding: 10,
            // borderBottomWidth: 1,
            // borderBottomColor: COLORS.darkBlues2,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: COLORS.darkBlues,
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.darkBlues2,
              marginRight: 15,
            }}>
            <Text
              style={{fontWeight: '400', fontSize: 14, color: COLORS.white}}>
              {coin}
            </Text>
            {show && <Image source={check} />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NetworkRow;
