import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Square = ({ text }) => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  
  square: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});