import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import styles from './signin.styles';
import { IMG_Logo } from 'assets/images';
import { TouchableOpacity } from 'react-native';
import { IC_Check } from 'assets/icons';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { stylesCommon } from 'constants/styles';
import Input from 'components/input';

const SignInView = props => {
  const {
    isClearPhone,
    isClearPass,
    isShowPass,
    showPassHandle,
    clearPhone,
    clearPass,
    signIn,
    control,
    handleSubmit,
    signUp,
    forgotHandle
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={stylesCommon.flex1}
          contentContainerStyle={stylesCommon.flex1}>
          <View style={styles.topContainer}>
            <Image source={IMG_Logo} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.wrapperInput}>
              <Text style={styles.titleInput}>Phone number</Text>
              <Input
                name={'phoneNumber'}
                styleContainer={styles.containerInput}
                isClear={isClearPhone}
                clearAction={clearPhone}
                inputStyle={styles.input}
                control={control}
                rules={{ required: 'Phone is require' }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <Text style={styles.titleInput}>Password</Text>
              <Input
                name={'passWord'}
                inputStyle={styles.input}
                secureTextEntry={isShowPass}
                isShowPass={isShowPass}
                showPassAction={showPassHandle}
                isClear={isClearPass}
                clearAction={clearPass}
                styleContainer={styles.containerInput}
                control={control}
                rules={{ required: 'Pass is require' }}
              />
            </View>
            <View style={styles.wrapperRemember}>
              <TouchableOpacity style={[styles.buttonRemember, stylesCommon.flexRowDefault]}>
                <View style={styles.borderCheck}>
                  <Image source={IC_Check} style={styles.imageRemember} />
                </View>
                <Text style={styles.titleRemember}>Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonRemember, stylesCommon.flexRowDefault]}
                onPress={forgotHandle}>
                <Text style={styles.titleForgot}>Forgot password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.buttonSignIn} onPress={handleSubmit(signIn)}>
          <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp} onPress={signUp}>
          <Text style={styles.titleRemember}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInView;
