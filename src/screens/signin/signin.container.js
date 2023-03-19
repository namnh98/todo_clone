import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from 'constants/screenNames';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignInView from './signin.view';

const SignInContainer = () => {
  const [isShowPass, setIsShowPass] = useState(true);
  const { control, handleSubmit, reset } = useForm();
  const navigation = useNavigation();

  useEffect(() => {
    setIsShowPass(true);
  }, []);

  const showPassHandle = () => {
    setIsShowPass(pre => !pre);
  };

  const signIn = d => {
    if (d.phoneNumber && d.passWord) {
      navigation.navigate(SCREENS_NAME.HOME_STACK);
      reset();
    }
  };

  const signUp = () => {
    navigation.navigate(SCREENS_NAME.SIGN_UP);
  };

  const forgotHandle = () => {
    navigation.navigate(SCREENS_NAME.FORGOT_PASSWORD);
  };

  return (
    <SignInView
      isShowPass={isShowPass}
      showPassHandle={showPassHandle}
      signIn={signIn}
      control={control}
      handleSubmit={handleSubmit}
      signUp={signUp}
      forgotHandle={forgotHandle}
    />
  );
};

export default SignInContainer;
