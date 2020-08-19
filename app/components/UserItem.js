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
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  title: {
    top: 30,
    left: 15,
    fontWeight: "600",
    fontSize: 20,
  },
  description: {
    top: 30,
    left: 15,
  },
});

export default UserItem;
