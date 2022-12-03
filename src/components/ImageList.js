import React from 'react';
import {ScrollView, View} from 'react-native';
import Beneficiaries from './Beneficiaries';

const ImageList = ({imageUris = [], onRemoveImage, onAddImage}) => {
  return (
    <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row', marginRight: 10}}>
        <Beneficiaries onChangeImage={uri => onAddImage(uri)} />
        {imageUris.map(img => (
          <Beneficiaries
            source={img}
            key={img}
            onChangeImage={() => onRemoveImage(img)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageList;
