import React from 'react';
import {Image, Text, View, Dimensions} from 'react-native';
import {COLORS} from '../constants/theme';
import bitcoin from '../assets/images/bitcoin.png';
import greenGraph from '../assets/images/greenGraph2.png';
import redGraph from '../assets/images/redGraph.png';
import {useTheme} from '@react-navigation/native';

const MarketCard = ({loss, source, pair, rate, percentage}) => {
  const {colors} = useTheme();
  const {width} = Dimensions.get('window');
  return (
    <View
      style={{
        backgroundColor: '#171925',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
        marginRight: 10,
        borderRadius: 20,
        height: 100,
        // width: width / 3.4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={source} style={{}} />
        <View style={{padding: 5}}>
          <Text style={{fontWeight: '600', fontSize: 16, color: colors.text}}>
            {pair}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 11, color: colors.text}}>{rate}</Text>
            <Text style={{marginLeft: 5, fontSize: 11, color: colors.text}}>
              USDT
            </Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={loss ? redGraph : greenGraph}
          // style={{height: 50, width: 50, resizeMode: 'contain'}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: colors.text}}>0.09844</Text>
        <Text style={{color: loss ? 'red' : 'green'}}>{percentage}</Text>
      </View>
    </View>
  );
};

export default MarketCard;
