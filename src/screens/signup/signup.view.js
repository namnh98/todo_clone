import { View } from 'react-native';
import React from 'react';
import styles from './signup.styles';
import Header from 'components/header';

const SignUpView = () => {
  return (
    <View style={styles.container}>
      <Header isBack />
    </View>
  );
};

export default SignUpView;
