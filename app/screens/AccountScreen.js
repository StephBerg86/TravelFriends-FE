import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import UserItem from "../components/UserItem";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import authContext from "../auth/context";
import authStorage from "../auth/storage";

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(authContext);
  console.log("user", user);

  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UserItem
          title={user.name}
          description={user.email}
          image={{ uri: user.image }}
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
