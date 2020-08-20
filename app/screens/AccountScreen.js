import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import UserItem from "../components/UserItem";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import authContext from "../auth/context";
import authStorage from "../auth/storage";

function AccountScreen({ navigation }) {
  const { token, setToken } = useContext(authContext);

  const handleLogOut = () => {
    setToken(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UserItem
          title={token.name}
          description={token.email}
          image={{ uri: token.image }}
        />
      </View>
      <Text style={styles.text}>My traveltips:</Text>
      <Text style={styles.text}>My friends:</Text>
      <View style={styles.button}>
        <AppButton title="Log out" onPress={() => handleLogOut()} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  screen: {
    backgroundColor: "#ffffff",
  },
  button: {
    margin: 40,
    marginTop: 190,
  },
  text: {
    fontSize: 24,
    fontWeight: "400",
    color: "#009973",

    padding: 30,
  },
});

export default AccountScreen;
