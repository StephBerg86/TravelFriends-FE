import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import TipDetailScreen from "./app/screens/TipDetailScreen";
import UserItem from "./app/components/UserItem";

export default function App() {
  return (
    <TipDetailScreen />
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
