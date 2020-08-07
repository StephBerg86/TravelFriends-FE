import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        title="TravelTip1"
        description="I've been to Thailand and you should do this and also this and this and so on"
        image={require("./app/assets/testImage.jpg")}
      />

      <Card
        title="TravelTip2"
        description="I've been to Thailand and you should do this and also this and this and so on"
        image={require("./app/assets/testImage.jpg")}
      />
    </View>
    //<WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
