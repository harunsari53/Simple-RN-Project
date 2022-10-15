import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
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
