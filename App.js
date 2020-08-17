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
  const [isReady, setIsReady] = useState(false);

  const storeToken = async () => {
    const token = await authStorage.getToken();
    if (token) {
      const user = jwtDecode(token);
      return setUser(user);
    }
  };

  if (!isReady)
    return (
      <AppLoading startAsync={storeToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
