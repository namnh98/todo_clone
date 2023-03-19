import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS_NAME } from '../constants/screenNames';
import SplashScreen from '../screens/splash/splash.container';
import WelcomeScreen from '../screens/welcome/welcome.container';
import HomeScreen from 'screens/home/home.container';
import DetailScreen from 'screens/detail/detail.container';
import SignInScreen from 'screens/signin/signin.container';
import SignUpScreen from 'screens/signup/signup.container';
import ForgotPasswordScreen from 'screens/forgotPassword/forgotPassword.container';
import ProfileScreen from 'screens/profile/profile.container';

const MainStack = createNativeStackNavigator();
const WelcomeStack = createNativeStackNavigator();
const AuthenticationStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const defaultConfig = {
  headerShown: false
};

const WelcomeRoutes = () => {
  return (
    <WelcomeStack.Navigator
      initialRouteName={SCREENS_NAME.SPLASH}
      screenOptions={{ ...defaultConfig }}>
      <WelcomeStack.Screen name={SCREENS_NAME.SPLASH} component={SplashScreen} />
      <WelcomeStack.Screen name={SCREENS_NAME.WELCOME} component={WelcomeScreen} />
    </WelcomeStack.Navigator>
  );
};

const AuthRoutes = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ ...defaultConfig }}>
      <AuthenticationStack.Screen name={SCREENS_NAME.SIGN_IN} component={SignInScreen} />
      <AuthenticationStack.Screen name={SCREENS_NAME.SIGN_UP} component={SignUpScreen} />
      <AuthenticationStack.Screen
        name={SCREENS_NAME.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
    </AuthenticationStack.Navigator>
  );
};

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator initialRouteName={SCREENS_NAME.HOME} screenOptions={{ ...defaultConfig }}>
      <HomeStack.Screen name={SCREENS_NAME.HOME} component={HomeScreen} />
      <HomeStack.Screen name={SCREENS_NAME.DETAIL} component={DetailScreen} />
      <HomeStack.Screen name={SCREENS_NAME.PROFILE} component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ ...defaultConfig }}>
        <MainStack.Screen name={SCREENS_NAME.WELCOME_STACK} component={WelcomeRoutes} />
        <MainStack.Screen name={SCREENS_NAME.AUTH_STACK} component={AuthRoutes} />
        <MainStack.Screen name={SCREENS_NAME.HOME_STACK} component={HomeRoutes} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
