import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flex: 1,
    backgroundColor: '#330867',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: RFPercentage(10),
  },
  image: {
    width: RFPercentage(40),
    height: RFPercentage(40),
  },
  title: {
    color: '#fff',
    fontSize: RFValue(26),
    fontFamily: 'Poppins_600SemiBold',
  },
  form: {
    paddingTop: RFPercentage(5),
    alignItems: 'flex-end',
  },
  forgotPassword: {
    marginVertical: 16,
  },
  buttons: {
    justifyContent: 'space-between',
    height: RFPercentage(17),
  },
  footer: {
    position: 'absolute',
    bottom: RFPercentage(1),
    color: '#fff',
    fontSize: RFValue(15),
    fontFamily: 'Poppins_600SemiBold',
  },
});
