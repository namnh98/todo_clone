import { View, TextInput, Image, Text } from 'react-native';
import React, { useEffect } from 'react';
import { DEFAULT_MAX_LENGTH } from 'constants/common';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { Controller, useController } from 'react-hook-form';
import { stylesCommon } from 'constants/styles';
import { IC_Clear, IC_Eye, IC_EyeOff } from 'assets/icons';
import { APP_COLORS } from 'constants/colors';

const Input = props => {
  const { styleContainer, name, inputStyle, control, rules, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styleContainer, { borderColor: error ? 'red' : APP_COLORS.eerie_black }]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              maxLength={DEFAULT_MAX_LENGTH}
              style={[styles.inputDefault, inputStyle]}
              {...rest}
            />
          </View>
          {error && <Text style={styles.input}>{error?.message || 'Error'}</Text>}
        </>
      )}
    />
  );
};

export default Input;
