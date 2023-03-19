import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './welcome.styles';
import { IMG_Welcome } from '../../assets/images';
import { TouchableOpacity } from 'react-native';

const WelcomeView = props => {
  const { navigateToSignIn } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={IMG_Welcome} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Welcome to Uno To Do</Text>
        <Text style={styles.subTitle}>Start using the best To Do app</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToSignIn}>
          <Text style={styles.buttonTitle}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeView;
