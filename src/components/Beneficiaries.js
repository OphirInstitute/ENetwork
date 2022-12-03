import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import passport from '../assets/images/passport.png';
import addIcon from '../assets/images/add.png';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {add} from 'react-native-reanimated';

const Beneficiaries = ({source, onChangeImage}) => {
  const handleChangePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      const img = response.assets[0].uri;

      onChangeImage(img);
    });
  };

  const handlePress = () => {
    if (!source) handleChangePhoto();
    else {
      Alert.alert(
        'Delete',
        'Are you sure you want to delete this beneficiary ',
        [{text: 'yes', onPress: () => onChangeImage(null)}, {text: 'No'}],
      );
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: '#000',
          borderRadius: 50,
          marginRight: 5,
          marginVertical: 10,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {!source && <Image source={addIcon} style={{height: 55, width: 55}} />}

        {source && (
          <Image source={{uri: source}} style={{height: 55, width: 55}} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Beneficiaries;
