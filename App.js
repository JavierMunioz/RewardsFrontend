// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
var jwtDecode = require('jwt-decode');
import LoginScreen from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        if (token) {
          const decodedToken = jwtDecode.jwtDecode(token);
          const currentTime = Date.now() / 1000; 
          const user = decodedToken.sub;
          setUser(user);
  
          if (decodedToken.exp < currentTime) {
            await AsyncStorage.removeItem('access_token');
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.log("Error al verificar el estado de autenticación", error);
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  if (loading) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen 
            name="Dashboard"
            component={Dashboard} 
            initialParams={{ user }}  
          />
        ) : (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
