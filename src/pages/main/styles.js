import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },
  title: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: metrics.baseMargin / 2,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: 'stretch',
  },
  error: {
    fontWeight: 'bold',
    color: colors.danger,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
  },
  input: {
    height: 50,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  button: {
    height: 50,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  loading: {
    color: colors.darkTransparent,
  },
  buttonText: {
    color: colors.darkTransparent,
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: metrics.basePadding,
  },
  footerLink: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
