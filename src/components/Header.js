import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import canceal from '../assets/images/canceal.png';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25, fontWeight: '500'}}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={canceal} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
