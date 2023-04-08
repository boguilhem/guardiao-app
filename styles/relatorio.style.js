import { StyleSheet } from 'react-native';

import { FONT, SIZES, COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.xxLarge,
    flex: 1,
  },

  graphContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.large,
    marginBottom: SIZES.large,
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.large,
    flexDirection: 'row',
  },

  dataContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.large,
    flexDirection: 'row',
  },

  dataInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    paddingHorizontal: SIZES.medium,
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray2,
    marginRight: SIZES.medium,
  },

  dataText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    width: '30%',
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray2,
    textAlignVertical: 'bottom',
    textAlign: 'center',
    marginRight: SIZES.medium,
  },

  title: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    marginLeft: SIZES.medium,
  },

  subtitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    textAlign: 'center',
  },

  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    flexDirection: 'row',
  },

  textContainer: {
    width: '90%',
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
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
