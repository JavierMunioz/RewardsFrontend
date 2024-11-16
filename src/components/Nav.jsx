import Constants from "expo-constants";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Svg, Circle } from "react-native-svg";

export default function Nav({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Svg height="100" width="100" viewBox="0 0 100 100" style={styles.circle}>
        <Circle cx="50" cy="50" r="20" stroke="#000000" strokeWidth="1" fill="none" />
      </Svg>
      <Image
        source={require('../img/user-solid.png')} // Reemplaza con la ruta de tu imagen
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>{ user }</Text>
      </View>
      <Image 
        source={require('../img/bars-solid.png')}
        resizeMode="contain"
        style={styles.bars}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#3B82F6",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
  },
  circle: {
    zIndex: 2,
  },
  image: {
    zIndex: 1,
    width: 25,
    height: 25, 
    position: 'absolute',
    marginLeft: 37.5,
  },

  bars: {
    width: 20,
    margin: 10,
  },
});
