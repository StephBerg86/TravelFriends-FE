import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import UserItem from "../components/UserItem";

function TipDetailScreen({ route }) {
  const tip = route.params;

  return (
    <View>
      <Image style={styles.image} source={tip.image} />
      <UserItem
        image={require("../assets/profilPicTest.jpeg")}
        title="Stephanie Bergman"
        description="5 tips"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.description}>{tip.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#009973",
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default TipDetailScreen;
