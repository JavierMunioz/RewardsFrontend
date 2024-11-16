import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const CustomLogo = () => {
  return (
    <View style={styles.container}>
      {/* SVG círculo exterior */}
      <Svg height="200" width="200" viewBox="0 0 100 100" style={styles.circle}>
        <Circle cx="50" cy="50" r="45" stroke="#3B82F6" strokeWidth="2" fill="none" />
      </Svg>
      
      {/* Imagen en el centro */}
      <Image
        source={require('../img/logorewards.png')} // Reemplaza con la ruta de tu imagen
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    zIndex: 2,
  },
  image: {
    zIndex: 1,
    width: 150,
    height: 150, // Ajusta el tamaño para que encaje en el círculo
    position: 'absolute',
  },
});

export default CustomLogo;
