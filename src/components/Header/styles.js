import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    color: colors.primary,
  },

  title: {
    fontSize: fonts.big,
  },
});

export default styles;
