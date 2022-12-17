import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';

import React from 'react';

const TextButton = ({
  buttonContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
  loading,
  startLoading,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.baseColor1,
        ...buttonContainerStyle,
      }}
      disabled={disabled || loading}
      onPress={onPress}>
      {loading || startLoading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h3,
            ...labelStyle,
          }}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
