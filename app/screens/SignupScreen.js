import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import ImageInputList from "../components/AddTipForm/ImageInputList";
import axios from "axios";
import jwtDecode from "jwt-decode";
import authStorage from "../auth/storage";
import AuthContext from "../auth/context";

function SignupScreen(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const authContext = useContext(AuthContext);

  const handleSubmit = (name, email, password) => {
    let body = {
      name: name,
      email: email,
      password: password,
    };

    axios({
      method: "post",
      url: "http://192.168.2.6:4000/signup",
      data: body,
    })
      .then(function (response) {
        console.log("res", response);
        setName("");
        setEmail("");
        setPassword("");
        if (!response) alert("Sign up failed");
        alert("Thank you for creating an account!");

        const res = response.data;

        if (res.token) {
          const user = jwtDecode(res.token);
          authStorage.storeToken(res.token);
          return authContext.setUser(user);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="account"
        keyboardType="default"
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <AppInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <ImageInputList />
      <AppButton
        title="Sign up"
        onPress={() => handleSubmit(name, email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default SignupScreen;
