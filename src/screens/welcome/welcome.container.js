import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from 'constants/screenNames';
import React from 'react';
import WelcomeView from './welcome.view';

const WelcomeContainer = () => {
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate(SCREENS_NAME.AUTH_STACK);
  };

  return <WelcomeView navigateToSignIn={navigateToSignIn} />;
};

export default WelcomeContainer;
