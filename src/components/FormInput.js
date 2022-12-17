import {COLORS, FONTS, SIZES} from '../constants/theme';
import {Text, TextInput, View} from 'react-native';

import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FormInput = ({
  editable,
  containerStyle,
  label,
  labelRight,
  placeholder,
  value,
  onPressIn,
  onPressOut,
  inputStyle,
  prependComponent,
  appendComponent,
  onBlur,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  customInputHeight,
  multiline,
  defaultValue,
  labelStyle = {
    color: COLORS.baseColor1,
  },
  ...rest
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}>
      {label && (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              // ...FONTS.body4,
              fontSize: SIZES.body3,
              color: COLORS.textSecondary,
              ...labelStyle,
            }}>
            {label}
          </Text>
          <TouchableOpacity>
            <Text style={{color: COLORS.primary, fontSize: SIZES.body4}}>
              {/* <Text style={{ color: COLORS.primary, ...FONTS.body4, fontSize: SIZES.body4 }}> */}
              {labelRight}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          height: customInputHeight ? customInputHeight : 50,
          paddingHorizontal: SIZES.padding / 1.3,
          marginTop: SIZES.base,
          borderRadius: 8,
          backgroundColor: COLORS.gray2,
          // paddingVertical: SIZES.padding,
        }}>
        {prependComponent}

        <TextInput
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          multiline={multiline ? multiline : false}
          style={{
            flex: 1,
            color: COLORS.baseColor,
            ...inputStyle,
            alignContent: 'center',
          }}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={COLORS.textPlaceholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          onBlur={onBlur}
          onChangeText={onChange}
          editable={editable}
          defaultValue={defaultValue}
          {...rest}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
