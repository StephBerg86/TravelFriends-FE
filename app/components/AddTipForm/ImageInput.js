import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const res = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!res.granted)
      alert("You need to enable permission to access your photos");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        base64: true,
      });
      let base64Img = `data:image/jpg;base64,${res.base64}`;
      if (!res.cancelled) onChangeImage(base64Img);
    } catch (error) {
      console.log("error reading image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons color={"#f2f2f2"} name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009973",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default ImageInput;
