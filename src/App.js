/* eslint-disable no-undef */
import { BackHandler, StatusBar, Text, TextInput, View } from 'react-native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';
import MainRoutes from './routes';
import { RecoilRoot } from 'recoil';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs();
if (!__DEV__) {
  console.log(() => {});
}

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  return (
    <RecoilRoot>
      <View>
        <StatusBar />
      </View>
      <MainRoutes />
    </RecoilRoot>
  );
};

export default App;
