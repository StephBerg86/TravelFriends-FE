import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text } from "react-native";
import Screen from "../components/Screen";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import ChooseCategory from "../components/ChooseCategory";
import ImageInputList from "../components/AddTipForm/ImageInputList";
import traveltipApi from "../api/traveltips";
import axios from "axios";

const categories = [
  { label: "To do", name: "To do" },
  { label: "To eat", name: "To eat" },
  { label: "To stay", name: "To stay" },
];

function AddTipScreen(props) {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [category, setCategory] = useState();
  const [country, setCountry] = useState();
  const [imageUris, setImageUris] = useState([]);
  const [countries, setCountries] = useState();

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    const response = await traveltipApi.getCountries();
    setCountries(response.data.country);
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const handleSubmit = (title, description, category, country) => {
    let body = {
      title: title,
      description: description,
      category: category.name,
      countryId: country.id,
    };

    axios({
      method: "post",
      url: "http://192.168.2.6:4000/traveltip",
      data: body,
    })
      .then(function (response) {
        console.log("res", response);
        setTitle("");
        setDescription("");
        setCategory("");
        setCountry("");
        if (!response) alert("Could not upload your travel tip");
        alert("Thank you for adding your travel tip!");
      })

      .catch(function (error) {
        console.log(error);
      });
  };

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
      <ChooseCategory
        onSelectItem={(item) => setCountry(item)}
        selectedItem={country}
        items={countries}
        icon="apps"
        placeholder="Country"
      />
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />

      <AppButton
        title="Submit"
        onPress={() => handleSubmit(title, description, category, country)}
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
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default AddTipScreen;
