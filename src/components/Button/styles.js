import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  button: {
    width: RFPercentage(40),
    backgroundColor: '#2753EE',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: RFPercentage(1),
  },
  buttonTransparent: {
    width: RFPercentage(40),
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: RFPercentage(1),
  },
  text: {
    color: '#fff',
    fontSize: RFValue(20),
    fontFamily: 'Poppins_700Bold',
  },
});
