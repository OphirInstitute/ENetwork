import React from 'react';
import {Image, Text, View} from 'react-native';
import star from '../assets/images/star.png';

const Favorite = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text style={{fontSize: 24}}>Favourites</Text>
      <Image source={star} />
    </View>
  );
};

export default Favorite;
