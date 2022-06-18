import React from 'react';
import { Login } from './src/pages/Login';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Login />;
}
