import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 7,
    width: RFPercentage(40),
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  icon: {},
  input: {
    flex: 1,
    color: '#fff',
    fontSize: RFValue(15),
    fontFamily: 'Poppins_500Medium',
    paddingLeft: 12,
  },
});
