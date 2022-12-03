import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../constants/theme';

const EnetHeader = ({title, subTitle}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color: COLORS.primary, fontSize: 28, padding: 10}}>
        {title}
      </Text>
      <Text style={{color: COLORS.primary, fontSize: 16, padding: 10}}>
        {subTitle}
      </Text>
    </View>
  );
};

export default EnetHeader;
