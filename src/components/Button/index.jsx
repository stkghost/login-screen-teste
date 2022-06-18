import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
export const Button = ({ title, background = true, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      style={background ? styles.button : styles.buttonTransparent}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
