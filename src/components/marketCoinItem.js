import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import bitcoin from '../assets/images/bitcoin.png';
import {COLORS} from '../constants/theme';
import greenGraph from '../assets/images/greenGraph.png';
import redGraph from '../assets/images/redGraph.png';
import {useTheme} from '@react-navigation/native';

const MarketCoinItem = ({
  loss,
  source,
  coinName,
  position,
  initial,
  vol,
  price,
  percentage,
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image source={source} style={{height: 50, width: 50}} />
          </View>
          <View style={{padding: 5}}>
            <Text style={{fontSize: 20, color: colors.text}}>{coinName} </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: colors.notification,

                  borderRadius: 10,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: colors.text,
                    textAlign: 'center',
                  }}>
                  {position}
                </Text>
              </View>
              <Text style={{padding: 5, color: colors.notification}}>
                {initial}
              </Text>
            </View>
            <Text style={{fontWeight: '600', fontSize: 12, color: colors.text}}>
              Vol ${vol}{' '}
            </Text>
          </View>
        </View>
        <View>
          <Image source={loss ? redGraph : greenGraph} />
        </View>
        <View>
          <Text style={{color: colors.text}}>${price}</Text>
        </View>
        <View
          style={{
            backgroundColor: loss ? COLORS.red : COLORS.green,
            padding: 5,
            borderRadius: 5,
          }}>
          <Text style={{color: colors.text}}> {percentage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarketCoinItem;
