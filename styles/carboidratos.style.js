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

  subtitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    marginTop: 2,
    textAlign: 'center',
  },

  carbCounter: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xxxLarge,
    marginTop: 0,
    textAlign: 'center',
  },

  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.xxxLarge,
    flexDirection: 'row',
  },

  counterContainer: {
    width: '80%',
    marginBottom: SIZES.xSmall,
  },

  searchBar: {
    width: '90%',
    marginBottom: SIZES.xLarge,
  },

  dataContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.medium,
  },

  cardsContainer: {
    width: '85%',
    // marginTop: SIZES.xSmall,
  },

  cardInfo: {
    width: '100%',
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: 5,
    backgroundColor: COLORS.skyBlue,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardBtn: {
    width: '100%',
    // paddingHorizontal: SIZES.xLarge,
    // borderRadius: SIZES.small,
    // flexDirection: 'column',
  },

  cardText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    textAlign: 'center',
    width: '100%',
    // marginTop: SIZES.xSmall,
    // paddingBottom: SIZES.small,
    // paddingHorizontal: SIZES.xLarge,
    // paddingVertical: SIZES.medium,
    // borderRadius: SIZES.small,
    // flexDirection: 'row',
  },
  cardTextSmall: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    textAlign: 'center',
    // flexDirection: 'column',
    // width: '100%',
    // marginTop: SIZES.xSmall,
    // paddingBottom: SIZES.small,
    // paddingHorizontal: SIZES.xLarge,
    // paddingVertical: SIZES.medium,
    // borderRadius: SIZES.small,
    // flexDirection: 'row',
    // textAlign: 'center',
  },

  hourText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    width: '80%',
  },

  alarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: '30%',
  },

  alarmContainerSpacing: {
    marginLeft: SIZES.medium,
  },

  btnInput: {
    width: '100%',
    borderRadius: SIZES.large,
  },

  addingContainer: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.medium,
  },

  addingCounter: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.medium,
    alignItems: 'center',
    gap: 10,
  },

  addingGrams: {
    paddingHorizontal: SIZES.medium,
    alignItems: 'center',
    // gap: 10,
  },

  // dataName: {
  //   fontFamily: FONT.regular,
  //   fontSize: SIZES.medium,
  //   paddingHorizontal: SIZES.xSmall,
  //   width: '33%',
  //   height: 30,
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   borderColor: COLORS.gray2,
  //   textAlignVertical: 'bottom',
  //   textAlign: 'left',
  //   marginRight: 5,
  // },
  // dataEmail: {
  //   fontFamily: FONT.regular,
  //   fontSize: SIZES.medium,
  //   paddingHorizontal: SIZES.xSmall,
  //   width: '55%',
  //   height: 30,
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   borderColor: COLORS.gray2,
  //   textAlignVertical: 'bottom',
  //   textAlign: 'left',
  //   marginRight: SIZES.xSmall,
  // },

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

  // btnContainer: {
  //   width: 40,
  //   height: 40,
  //   backgroundColor: COLORS.lightBlue,
  //   borderRadius: SIZES.small / 1.25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    // borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
