import { styles } from './styles';
import { TextInput, View, Image } from 'react-native';
export const InputIcon = ({ icon, marginBottom, ...rest }) => {
  return (
    <View style={[styles.container, { marginBottom }]}>
      <Image source={icon} style={styles.icon} />
      <TextInput style={styles.input} {...rest} placeholderTextColor='#fff' />
    </View>
  );
};
