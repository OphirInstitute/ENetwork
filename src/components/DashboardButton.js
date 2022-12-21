import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/theme';

const DashboardButton = ({source, title, press, show}) => {
  return (
    <TouchableOpacity
      onPress={show ? () => press() : console.log('press')}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: COLORS.darkBlues,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 10,
        }}>
        <Image source={source} />
      </View>
      <Text style={{fontSize: 16, marginTop: 6, color: COLORS.gray2}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DashboardButton;
