import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/theme';
import {useTheme} from '@react-navigation/native';

const TopBar = ({title, handlePress, style, active, otherStyles}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={() => handlePress(title)}>
      <View
        style={{
          alignSelf: 'baseline',
          flexDirection: 'row',
          marginRight: 10,
          backgroundColor: colors.background,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[
              {
                fontWeight: '600',
                color: active ? colors.text : colors.notification,
              },
              otherStyles,
            ]}>
            {title}
          </Text>
          <View style={style} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopBar;
