import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  empty: {
    marginTop: metrics.baseMargin * 2,
    color: colors.white,
    fontSize: 14,
    alignSelf: 'center',
  },
});

export default styles;
