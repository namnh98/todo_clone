import { APP_FONTS } from 'assets/fonts';
import { APP_COLORS } from 'constants/colors';
import { DEVICE, scale } from 'constants/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonImage: {
    width: scale(24),
    height: scale(24)
  },
  buttonDefaults: {},
  wrapperButtonRight: {},
  inputDefault: {
    width: DEVICE.WIDTH * 0.75
  },
  input: {
    fontSize: scale(14),
    fontFamily: APP_FONTS.REGULAR,
    lineHeight: scale(20),
    color: APP_COLORS.brink_pink
  }
});

export default styles;
