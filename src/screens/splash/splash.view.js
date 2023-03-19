import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {IMG_Splash} from '../../assets/images';
import styles from './splash.styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS_NAME} from '../../constants/screenNames';

const SplashView = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS_NAME.WELCOME);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={IMG_Splash} />
    </View>
  );
};

export default SplashView;
