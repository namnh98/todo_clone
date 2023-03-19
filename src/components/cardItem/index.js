import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { stylesCommon } from 'constants/styles';
import { IC_ForwardSmall } from 'assets/icons';
import { EMPTY_FUNCTION, EMPTY_STRING } from 'constants/common';

const CardItem = props => {
  const { srcIcon, iconStyle, title, titleStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={[stylesCommon.flexRowFull, styles.container]}
      onPress={typeof onPress === 'function' ? onPress : EMPTY_FUNCTION}>
      <View style={[styles.leftSide, stylesCommon.flexRowDefault]}>
        <Image source={srcIcon} style={[styles.icon, iconStyle]} />
        <Text style={[styles.titleDefault, titleStyle]}>{title || EMPTY_STRING}</Text>
      </View>
      <Image source={IC_ForwardSmall} style={[styles.icon, styles.iconRight]} />
    </TouchableOpacity>
  );
};

export default CardItem;
