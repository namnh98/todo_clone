import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { IC_Back } from 'assets/icons';
import { useNavigation } from '@react-navigation/native';
import { stylesCommon } from 'constants/styles';

const Header = props => {
  const { isBack, leftComponent, titleHeader, styleTitle, rightComponent } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {leftComponent ? (
        leftComponent?.()
      ) : isBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={stylesCommon.centerDefault}>
          <Image source={IC_Back} style={styles.imageBack} />
        </TouchableOpacity>
      ) : (
        <View style={styles.imageBack} />
      )}
      {titleHeader && <Text style={[styles.title, styleTitle]}>{titleHeader}</Text>}
      {rightComponent ? rightComponent?.() : <View style={styles.imageBack} />}
    </View>
  );
};

export default Header;
