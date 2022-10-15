import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 11,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button:{
    marginVertical:20,
  },
  footerText:{
    color: colors.blue,
    marginTop: 20,
    marginBottom: 56,
    alignSelf:'center'
  },
  footerLink:{
    fontWeight:'bold',
  },
});
