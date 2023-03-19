import { APP_FONTS } from 'assets/fonts';
import { APP_COLORS } from 'constants/colors';
import { DEVICE, scale } from 'constants/scale';
import { Platform, StyleSheet } from 'react-native';

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
    flex: 1,
    alignItems: 'center'
  },
  titleInput: {
    color: APP_COLORS.black,
    fontFamily: APP_FONTS.REGULAR,
    fontSize: scale(16),
    lineHeight: scale(20)
  },
  wrapperInput: {
    width: DEVICE.WIDTH,
    marginBottom: scale(16),
    paddingHorizontal: scale(16)
  },
  containerInput: {
    borderWidth: scale(0.5),
    borderColor: APP_COLORS.black,
    marginTop: scale(4),
    borderRadius: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scale(8),
    paddingRight: scale(32),
    minHeight: scale(50)
  },
  input: {
    color: APP_COLORS.black,
    fontSize: scale(15),
    fontFamily: APP_FONTS.REGULAR,
    lineHeight: scale(18)
  },
  buttonClear: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: scale(24),
    height: scale(24)
  },
  wrapperButton: {
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? scale(24) : 0
  },
  buttonSignIn: {
    backgroundColor: APP_COLORS.majorelle_blue,
    width: DEVICE.WIDTH - scale(32),
    paddingVertical: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(12),
    minHeight: scale(50),
    marginTop: scale(16)
  },
  buttonTitle: {
    color: APP_COLORS.white,
    fontSize: scale(16),
    fontFamily: APP_FONTS.MEDIUM
  },
  wrapperRemember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: scale(16)
  },
  borderCheck: {
    borderWidth: scale(1),
    borderColor: APP_COLORS.black,
    marginRight: scale(4),
    borderRadius: scale(6)
  },
  buttonRemember: {},
  titleRemember: {
    color: APP_COLORS.black,
    fontFamily: APP_FONTS.REGULAR,
    fontSize: scale(16)
  },
  imageRemember: {
    width: scale(20),
    height: scale(20)
  },
  buttonSignUp: {
    marginTop: scale(8),
    width: DEVICE.WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleForgot: {
    color: APP_COLORS.majorelle_blue,
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(16),
    lineHeight: scale(20)
  }
});

export default styles;
