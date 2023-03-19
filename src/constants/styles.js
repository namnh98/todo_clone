import { StyleSheet } from 'react-native';

export const stylesCommon = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flexRowDefault: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexRowFull: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  centerDefault: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
