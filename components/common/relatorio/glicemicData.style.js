import { StyleSheet } from 'react-native';

import { COLORS, SIZES, FONT } from '../../../constants';

const styles = StyleSheet.create({
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

  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
