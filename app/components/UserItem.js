import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function UserItem({ title, description, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    top: 10,
    left: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    top: 20,
    left: 15,
    fontWeight: "600",
    fontSize: 16,
  },
  description: {
    top: 20,
    left: 15,
  },
});

export default UserItem;
