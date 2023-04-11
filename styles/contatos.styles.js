import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SIZES.xxLarge,
    marginBottom: SIZES.xxLarge,
    alignItems: 'center',
  },

  title: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    marginLeft: SIZES.medium,
  },

  // subtitle: {
  //   fontFamily: FONT.bold,
  //   fontSize: SIZES.large,
  //   marginTop: 2,
  //   textAlign: 'center',
  // },

  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.xLarge,
    flexDirection: 'row',
  },

  savedContactsContainer: {
    width: '100%',
    justifyContent: 'center',
    marginTop: SIZES.xxxLarge,
    marginBottom: SIZES.xxxLarge,
    flexDirection: 'row',
  },

  cardsContainer: {
    alignItems: 'center',
    width: '80%',
    marginTop: SIZES.medium,
  },

  // cardBtn: {
  //   marginTop: SIZES.medium,
  //   paddingBottom: SIZES.small,
  //   paddingHorizontal: SIZES.xLarge,
  //   backgroundColor: COLORS.skyBlue,
  //   alignItems: 'center',
  //   borderRadius: SIZES.small,
  //   flexDirection: 'row',
  // },

  btnInput: {
    width: '100%',
    borderRadius: SIZES.large,
  },

  // messageContainer: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: SIZES.xLarge,
  // },

  // messageContainer: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: SIZES.xLarge,
  // },

  // contentContainer: {
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: SIZES.xLarge,
  // },

  // content: {
  //   fontFamily: FONT.regular,
  //   fontSize: SIZES.medium,
  //   marginTop: 2,
  //   textAlign: 'justify',
  // },

  // cardBtn: {
  //   marginTop: SIZES.medium,
  //   paddingVertical: SIZES.medium,
  //   paddingHorizontal: SIZES.xxLarge,
  //   backgroundColor: COLORS.skyBlue,
  //   alignItems: 'center',
  //   borderRadius: SIZES.small,
  //   flexDirection: 'row',
  // },

  // btnContainer: {
  //   width: 40,
  //   height: 40,
  //   backgroundColor: COLORS.lightBlue,
  //   borderRadius: SIZES.small / 1.25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  dataContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.large,
    flexDirection: 'row',
  },

  dataText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.xSmall,
    width: '40%',
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray2,
    textAlignVertical: 'bottom',
    textAlign: 'left',
    marginRight: SIZES.medium,
  },

  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
