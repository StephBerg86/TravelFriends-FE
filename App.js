import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";

export default function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isReady, setIsReady] = useState(false);

  const storeToken = async () => {
    const token = await authStorage.getToken();
    console.log("token", token);
    if (token) {
      const jwtToken = jwtDecode(token);
      return setToken(jwtToken);
    }
  };

  if (!isReady)
    return (
      <AppLoading startAsync={storeToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      <NavigationContainer theme={navigationTheme}>
        {token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
