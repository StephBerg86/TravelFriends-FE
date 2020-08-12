import React, { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./Screen";
import ImageInput from "./ImageInput";

export default function SelectImage() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const res = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!res.granted)
      alert("You need to enable permission to access your photos");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync();
      if (!res.cancelled) setImageUri(res.uri);
    } catch (error) {
      console.log("error reading image", error);
    }
  };
  return (
    <>
      <Screen>
        <Button title="Select image" onPress={selectImage} />
        <Image
          source={imageUri && imageUri ? { uri: imageUri } : null}
          style={{ width: 200, height: 200 }}
        />
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
      </Screen>
    </>
  );
}
