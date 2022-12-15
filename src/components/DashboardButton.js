import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

const DashboardButton = ({source, title}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: COLORS.gray,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 10,
        }}>
        <Image source={source} />
      </View>
      <Text style={{fontSize: 16, marginTop: 6}}>{title}</Text>
    </View>
  );
};

export default DashboardButton;
