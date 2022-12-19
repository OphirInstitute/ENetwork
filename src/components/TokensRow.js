import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import bitcoin from '../assets/images/Cryptocurrency.png';
import arrow from '../assets/images/arrow.png';
import graph from '../assets/images/graph.png';
import arrowDown from '../assets/images/arrow-down.png';
import greenGraph from '../assets/images/greenGraph.png';
import {COLORS} from '../constants/theme';

const TokensRow = ({
  loss,
  coin,
  network,
  leftbottom,
  rightbottom,
  img,
  perecentage,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingLeft: 30,
          paddingRight: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={img} style={{marginRight: 5, height: 45, width: 45}} />
          <View style={{flexDirection: 'column', marginLeft: 5}}>
            <Text
              style={{fontWeight: '500', fontSize: 16, color: COLORS.white}}>
              {coin}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 13,
                  marginRight: 10,
                  color: COLORS.gray4,
                }}>
                ${leftbottom}
              </Text>
              <Text style={{color: loss ? 'red' : 'green'}}>
                -{perecentage}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              marginRight: 3,
            }}>
            <Text
              style={{fontWeight: '600', fontSize: 15, color: COLORS.white}}>
              {' '}
              340
            </Text>
            <Text style={{color: COLORS.gray3}}>${rightbottom}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.gray3,
                fontSize: 11,
                fontWeight: '700',
                marginTop: 2,
              }}>
              {network}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TokensRow;
