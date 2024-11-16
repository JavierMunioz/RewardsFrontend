import React from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Nav from '../components/Nav';

export default function Dashboard({ route }) {
  const { user } = route.params;
  return (
    
    <View style={styles.isView}>
      <Nav user={user}/>
      <Text style={styles.eventNameText}>Event Name</Text>

      <View style={styles.container}>
        <TouchableOpacity>
        <ImageBackground
          source={require('../img/R.jpg')} // Ruta local a la imagen
          style={[styles.image, { width: Dimensions.get('window').width * 0.9 }]} // Ajusta el ancho relativo al tamaño de la pantalla
          imageStyle={styles.imageStyle} // Aplica estilos a la imagen
        >
          <Text style={styles.text2}>Assigned Reward</Text>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
        <ImageBackground
          source={require('../img/6543.jpg')} // Ruta local a la imagen
          style={[styles.image, { width: Dimensions.get('window').width * 0.9 }]} // Ajusta el ancho relativo al tamaño de la pantalla
          imageStyle={styles.imageStyle} // Aplica estilos a la imagen
        >
          <Text style={styles.text2}>Rewards</Text>
        </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  isView: {
    flex: 1,
    justifyContent: 'flex-start',  // Alinea el contenido hacia la parte superior
    backgroundColor: '#F0F4F8',
  },
  eventNameText: {
    fontWeight: 'bold',
    fontSize: 40,  // Ajusta el tamaño de fuente
    textAlign: 'center',
    color: '#1E3A8A',
    marginVertical: 20,  // Añade espacio vertical para separar el texto
  },
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    height: 150, // Ajusta la altura del cuadro
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: '#000', 
    borderRadius: 20, // Bordes redondeados
  },
  text2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el texto
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
