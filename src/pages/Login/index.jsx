import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import Img from '../../assets/login/login-img.png';
import { useForm, Controller } from 'react-hook-form';
import { InputIcon } from '../../components/InputIcon';
import { Button } from '../../components/Button';
import PadLock from '../../assets/login/padlock.png';
import User from '../../assets/login/user.png';

export const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Image source={Img} style={styles.image} />
          <Text style={styles.title}>Dados de acesso</Text>

          <View style={styles.form}>
            <Controller
              control={control}
              name='email'
              render={({ field: { value, onChange } }) => (
                <InputIcon
                  value={value}
                  onChangeText={onChange}
                  icon={User}
                  marginBottom={30}
                  placeholder='E-mail'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field: { value, onChange } }) => (
                <InputIcon
                  value={value}
                  onChangeText={onChange}
                  icon={PadLock}
                  placeholder='Senha'
                  secureTextEntry
                  autoCapitalize='none'
                  autoCorrect={false}
                />
              )}
            />
            <Pressable style={styles.forgotPassword}>
              <Text
                style={{ color: '#ffff', fontFamily: 'Poppins_600SemiBold' }}
              >
                Esqueceu sua senha?
              </Text>
            </Pressable>
            <View style={styles.buttons}>
              <Button title='Entrar' onPress={handleSubmit(onSubmit)} />
              <Button title='Cadastrar' background={false} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.footer}>Versão 1.0</Text>
    </KeyboardAvoidingView>
  );
};
