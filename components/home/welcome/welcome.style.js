import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SIZES.xxLarge,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: 'center',
  },
  welcomeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),

  cardsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },

  cardBtn: {
    // width: '100%',
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
    // marginLeft: SIZES.xxxLarge,
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
