import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/theme';

const CustomButton = ({title = 'Continue', onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: COLORS.primary, padding: 10, borderRadius: 10}}>
      <View style={{alignSelf: 'center'}}>
        <Text style={{color: COLORS.white, fontSize: 20}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
