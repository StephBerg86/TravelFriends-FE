import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#d8335a" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 3,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
