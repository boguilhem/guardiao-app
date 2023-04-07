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
  },

  content: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: 2,
    textAlign: 'justify',
  },

  cardsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },

  cardBtn: {
    marginTop: SIZES.medium,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xxLarge,
    backgroundColor: COLORS.skyBlue,
    alignItems: 'center',
    borderRadius: SIZES.small,
    flexDirection: 'row',
  },

  btnText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    textAlign: 'center',
    width: '80%',
  },

  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightBlue,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    // borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
