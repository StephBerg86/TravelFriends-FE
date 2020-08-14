import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, description, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#009973",
    marginBottom: 20,
    marginLeft: "5%",
    marginRight: "5%",
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "auto",
    height: 100,
  },
  description: {
    color: "#ffffff",
  },
  title: {
    marginBottom: 7,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default Card;
