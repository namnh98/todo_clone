import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../constants/colors';
import { APP_FONTS } from '../../assets/fonts';
import { DEVICE, scale } from 'constants/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.white
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.5,
    alignItems: 'center'
  },
  title: {
    color: APP_COLORS.black,
    fontFamily: APP_FONTS.REGULAR,
    fontSize: scale(36),
    lineHeight: scale(44),
    width: DEVICE.WIDTH * 0.6,
    textAlign: 'center'
  },
  subTitle: {
    color: APP_COLORS.majorelle_blue,
    fontSize: scale(16),
    fontFamily: APP_FONTS.MEDIUM,
    lineHeight: scale(24),
    marginTop: scale(16)
  },
  buttonContainer: {
    backgroundColor: APP_COLORS.majorelle_blue,
    borderRadius: scale(20),
    marginTop: scale(64),
    width: DEVICE.WIDTH - scale(32),
    paddingVertical: scale(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    color: APP_COLORS.white,
    fontFamily: APP_FONTS.REGULAR,
    fontSize: scale(16)
  }
});

export default styles;
