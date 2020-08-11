import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import Screen from "./app/components/Screen";
import AppInput from "./app/components/AppInput";
import ChooseCategory from "./app/components/ChooseCategory";
import LoginScreen from "./app/screens/LoginScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <>
      <LoginScreen />
    </>
  );
}
