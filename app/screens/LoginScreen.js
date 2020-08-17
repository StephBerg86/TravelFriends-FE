import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (email, password) => {
    const response = await authApi.login(email, password);
    const res = response.data;

    if (res.token) {
      const user = jwtDecode(res.token);
      authStorage.storeToken(res.token);
      return authContext.setUser(user) && setLoginFailed(false);
    } else setLoginFailed(true);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ErrorMessage
        error="Invalid email and/or password."
        visible={loginFailed}
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
      <AppButton title="Login" onPress={() => handleSubmit(email, password)} />
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

export default LoginScreen;
