// Login.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormLogin from '../components/FormLogin';

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://rewards-hub.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
      });

      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem('access_token', data.access_token); // Guarda el token
        setIsAuthenticated(true); // Cambia el estado de autenticación
      } else {
        const errorData = await response.json();
        setError(errorData.detail); // Muestra el error si las credenciales son incorrectas
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <View style={styles.login}>
      <FormLogin
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
