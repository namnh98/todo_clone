import { APP_FONTS } from 'assets/fonts';
import { APP_COLORS } from 'constants/colors';
import { DEVICE, scale } from 'constants/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleDefault: {
    color: APP_COLORS.black,
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(16),
    lineHeight: scale(20)
  },
  leftSide: {
    width: DEVICE.WIDTH * 0.25
  },
  icon: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
    marginRight: scale(8)
  },
  iconRight: {
    tintColor: APP_COLORS.eerie_black_60
  },
  container: {
    paddingVertical: scale(8),
    minHeight: scale(40)
  }
});

export default styles;
