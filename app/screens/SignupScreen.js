import React, { useState, useContext } from "react";
import { StyleSheet, Image, ActivityIndicator } from "react-native";
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
  const [imageUris, setImageUris] = useState([]);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const uploadImage = async (imageUris) => {
    setLoading(true);
    let data = {
      file: imageUris,
      upload_preset: "phoneImages",
    };
    return fetch("https://api.cloudinary.com/v1_1/travelfriends/upload", {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    }).then(async (r) => {
      setLoading(false);
      return await r.json();
    });
  };

  const handleSubmit = async (name, email, password, imageUris) => {
    const resImage = await uploadImage(imageUris);

    let body = {
      name: name,
      email: email,
      password: password,
      image: resImage.url,
    };

    axios({
      method: "post",
      url: "http://192.168.2.6:4000/signup",
      data: body,
    })
      .then(function (response) {
        console.log("res", response);
        if (!response) alert("Sign up failed");
        alert("Account created. Welcome to TravelFriends!");

        const res = response.data;
        authContext.setUser(res);

        if (res.token) {
          const jwtToken = jwtDecode(res.token);
          authStorage.storeToken(res.token);
          return authContext.setToken(jwtToken);
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
        // keyboardType="phone-pad"
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <AppInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        // keyboardType="email-address"
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
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppButton
        title="Sign up"
        onPress={() => handleSubmit(name, email, password, imageUris)}
      />
      <ActivityIndicator animating={loading} size="large" color="#d8335a" />
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
