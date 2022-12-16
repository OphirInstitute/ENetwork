import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../constants/theme';

const CustomInput = ({
  fieldName,
  leftLabel,
  rightLabel,
  onChangeNumber,
  keyboardType,
  value,
  placeholder,
  style,
  styleText,
  error,
  hasIcon,
  icon,
  onPressIcon,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{leftLabel}</Text>
        <Text style={styles.label}>{rightLabel}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styleText]}
          placeholderTextColor="grey"
          onChangeText={text => onChangeNumber(text, fieldName)}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
        {hasIcon && (
          <View>
            <TouchableOpacity onPress={onPressIcon}>
              <Image style={styles.eyeIcon} source={icon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {error && (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  input: {
    marginHorizontal: 16,
    // fontFamily: 'Jost-Regular',
    width: '70%',
    color: '#202421',
    fontWeight: '600',
  },
  label: {
    // fontFamily: 'Jost-Regular',
    color: '#010002',
    fontSize: 14,
    lineHeight: 14,
    marginVertical: 10,
  },

  eyeIcon: {
    // height: 1,
    // width: 16,
    marginRight: 20,
  },
  error: {
    color: 'red',
    // fontFamily: 'Jost-Regular',
    fontSize: 12,
    lineHeight: 18,
  },

  inputContainer: {
    // backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderColor: COLORS.gray,
    borderWidth: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
});
