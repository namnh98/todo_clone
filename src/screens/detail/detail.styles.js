import { APP_FONTS } from 'assets/fonts';
import { APP_COLORS } from 'constants/colors';
import { DEVICE, scale } from 'constants/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.lavender_blue
  },
  titleHeader: {
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(20),
    color: APP_COLORS.white,
    lineHeight: scale(28)
  },
  iconBackLong: {
    tintColor: APP_COLORS.white
  },
  btn: {
    marginRight: scale(8)
  },
  btnRight: {
    marginHorizontal: scale(8)
  },
  left: {},
  right: {},
  iconImg: {
    tintColor: APP_COLORS.white
  },
  tabWrapper: {
    marginTop: scale(16)
  },
  tabBar: {
    backgroundColor: APP_COLORS.transparent
  },
  titleTabBar: {
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(16),
    lineHeight: scale(22),
    color: APP_COLORS.eerie_black
  },
  indicator: {
    backgroundColor: APP_COLORS.majorelle_blue
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: scale(50),
    marginBottom: scale(32),
    borderRadius: scale(16),
    backgroundColor: APP_COLORS.ceil,
    marginHorizontal: scale(16),
    paddingHorizontal: scale(16)
  },
  input: {
    color: APP_COLORS.white,
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(16),
    lineHeight: scale(22)
  }
});

export default styles;
