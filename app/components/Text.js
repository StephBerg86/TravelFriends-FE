import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={(styles.text, style)} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
