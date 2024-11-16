// FormLogin.js
import Constants from 'expo-constants';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import CustomLogo from './Logo';

export default function FormLogin({ username, setUsername, password, setPassword, handleLogin, error }) {
  return (
    <View style={styles.container}>
      <CustomLogo />
      <Text style={styles.text}>Rewards Hub</Text>
      
      {/* Campo de nombre de usuario */}
      <Text style={styles.label}>Username</Text>
      <TextInput 
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      
      {/* Campo de contraseña */}
      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      
      {/* Mostrar errores */}
      {error && <Text style={styles.errorText}>{error}</Text>}
      
      {/* Botón personalizado */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 25,
    height: 50,
    borderColor: '#3B82F6',
    backgroundColor: '#F3F4F6',
  },
  text: {
    color: '#1E3A8A',
    fontWeight: 'bold',
    fontSize: 60,
    marginBottom: 60,
  },
  label: {
    width: 240,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 20,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
