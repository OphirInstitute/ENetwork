import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import bitcoin from '../assets/images/Cryptocurrency.png';
import arrow from '../assets/images/arrow.png';
import graph from '../assets/images/graph.png';
import arrowDown from '../assets/images/arrow-down.png';
import greenGraph from '../assets/images/greenGraph.png';

const CryptoRow = ({loss, coin, img, perecentage}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={img} style={{marginRight: 5}} />
          <Text style={{fontWeight: '600'}}>{coin}</Text>
        </View>
        <View>
          <Image source={loss ? graph : greenGraph} />
        </View>
        <View>
          <View>
            <Text style={{fontWeight: '600'}}> $26,000.0</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={loss ? arrowDown : arrow} />
            <Text style={{color: loss ? 'red' : 'green'}}>{perecentage}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoRow;
