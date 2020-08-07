import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  LobsterTwo_400Regular,
} from "@expo-google-fonts/lobster-two";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  let [fontsLoaded] = useFonts({ LobsterTwo_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.slogan}>
        Share your travel tips and get inspired by your friends
      </Text>
      <View style={styles.buttonsContainer}>
        <AppButton title="Register" color="#009973" />
        <AppButton title="Login" color="#d8335a" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    left: 10,
    position: "absolute",
    top: 30,
  },
  slogan: {
    color: "white",
    fontSize: 52,
    margin: 25,
    textAlign: "center",
    bottom: 80,
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontFamily: "LobsterTwo_400Regular",
  },
});

export default WelcomeScreen;
