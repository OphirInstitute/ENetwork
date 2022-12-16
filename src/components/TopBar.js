import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/theme';

const TopBar = ({title, handlePress, style}) => {
  return (
    <TouchableOpacity onPress={() => handlePress(title)}>
      <View
        style={{
          alignSelf: 'baseline',
          flexDirection: 'row',
          marginRight: 10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '600'}}>{title}</Text>
          <View style={style} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopBar;
