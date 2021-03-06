import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  LobsterTwo_400Regular,
} from "@expo-google-fonts/lobster-two";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({ LobsterTwo_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.slogan}>
        Share your travel tips and get inspired by your friends
      </Text>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Sign up"
          onPress={() => navigation.navigate("Signup")}
        />
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
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 3,
    fontFamily: "LobsterTwo_400Regular",
  },
});

export default WelcomeScreen;
