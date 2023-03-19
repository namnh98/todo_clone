import { APP_FONTS } from 'assets/fonts';
import { APP_COLORS } from 'constants/colors';
import { scale } from 'constants/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.white
  },
  shortNameWrapper: {
    backgroundColor: APP_COLORS.majorelle_blue,
    width: scale(40),
    height: scale(40),
    borderRadius: scale(999),
    marginRight: scale(4)
  },
  titleLeftHeader: {
    color: APP_COLORS.white,
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(16),
    lineHeight: scale(22)
  },
  titleMailLeftHeader: {
    color: APP_COLORS.black,
    fontFamily: APP_FONTS.MEDIUM,
    fontSize: scale(18),
    lineHeight: scale(22)
  },
  headerLeft: {
    flexDirection: 'row'
  },
  iconHeader: {
    width: scale(24),
    height: scale(24),
    tintColor: APP_COLORS.majorelle_blue
  },
  buttonDefault: {
    marginHorizontal: scale(8)
  },
  body: {
    marginHorizontal: scale(16),
    flex: 1
  },
  iconStar: {
    tintColor: APP_COLORS.brink_pink
  },
  iconHouse: {
    tintColor: APP_COLORS.majorelle_blue
  },
  iconList: {
    tintColor: APP_COLORS.lavender_blue
  },
  line: {
    height: scale(1),
    backgroundColor: APP_COLORS.eerie_black_60,
    marginVertical: scale(16)
  },
  footer: {
    flex: 0.1,
    paddingHorizontal: scale(16)
  },
  titleNewList: {
    color: APP_COLORS.majorelle_blue,
    fontSize: scale(15),
    fontFamily: APP_FONTS.MEDIUM,
    lineHeight: scale(19)
  },
  iconPlus: {
    marginRight: scale(8)
  }
});

export default styles;
