import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import frame1 from '../assets/images/frame2.png';

const EnetItem = ({name, img, style}) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <TouchableOpacity>
        <View
          style={[
            {
              height: 120,
              width: width / 3.5,
              overflow: 'hidden',
              borderRadius: 14,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              flex: 1,
            },
            style,
          ]}>
          <Image source={img} style={{resizeMode: 'cover'}} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{padding: 5, textAlign: 'center'}}>{name}</Text>
      </View>
    </View>
  );
};

export default EnetItem;
