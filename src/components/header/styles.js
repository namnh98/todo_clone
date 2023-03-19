import { APP_FONTS } from 'assets/fonts';
import { APP_COLORS } from 'constants/colors';
import { DEVICE, scale } from 'constants/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: DEVICE.WIDTH,
    minHeight: scale(50),
    // backgroundColor: APP_COLORS.majorelle_blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(16)
  },
  imageBack: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain'
  },
  title: {
    color: APP_COLORS.majorelle_blue,
    fontSize: scale(20),
    fontFamily: APP_FONTS.REGULAR,
    lineHeight: scale(28)
  }
});

export default styles;
