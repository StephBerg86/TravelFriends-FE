import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import Screen from "../components/Screen";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import ChooseCategory from "../components/ChooseCategory";

const categories = [
  { label: "To do", value: 1 },
  { label: "To eat", value: 2 },
  { label: "To stay", value: 3 },
];

function AddTipScreen(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.title}>Add a tip:</Text>
      <AppInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Title of the tip"
        maxLength={60}
        onChangeText={(text) => setTitle(text)}
      />
      <AppInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Description tip"
        maxLength={200}
        onChangeText={(text) => setDescription(text)}
      />
      <ChooseCategory
        onSelectItem={(item) => setCategory(item)}
        selectedItem={category}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppInput
        placeholder="Here comes image"
        onChange={(pic) => setImage(pic)}
      />
      <AppButton
        title="Submit"
        onPress={() => console.log(title, description, category)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "600",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default AddTipScreen;
