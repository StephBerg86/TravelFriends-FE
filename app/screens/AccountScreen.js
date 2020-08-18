import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import UserItem from "../components/UserItem";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import authContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "My traveltips",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#f2f2f2",
    },
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(authContext);

  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
    console.log("log", handleLogOut);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UserItem
          title={user.name}
          description={user.email}
          image={require("../assets/profilPicTest.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => <UserItem title={item.title} />}
        />
      </View>
      <View style={styles.button}>
        <AppButton title="Log out" onPress={() => handleLogOut()} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "#ffffff",
  },
  button: {
    margin: 40,
  },
});

export default AccountScreen;
