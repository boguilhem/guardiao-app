import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SIZES.xxLarge,
    marginBottom: SIZES.xxLarge,
  },

  title: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    marginLeft: SIZES.medium,
  },

  subtitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    marginTop: 2,
    textAlign: 'center',
  },

  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    flexDirection: 'row',
  },

  messageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
  },

  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.xxxLarge,
  },

  preview: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: 2,
    textAlign: 'justify',
  },

  content: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: 2,
    textAlign: 'justify',
  },

  contentBtn: {
    marginTop: SIZES.xSmall,
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.xSmall,
    alignItems: 'center',
    borderRadius: SIZES.xSmall,
    borderColor: 'gray',
    borderWidth: 1,
  },

  btnText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    textAlign: 'center',
    width: '80%',
  },

  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
