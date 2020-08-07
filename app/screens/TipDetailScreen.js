import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import UserItem from "../components/UserItem";

function TipDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/testImage.jpg")} />
      <UserItem
        image={require("../assets/profilPicTest.jpeg")}
        title="Stephanie Bergman"
        description="5 tips"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Travel tip 1</Text>
        <Text style={styles.description}>
          This is the description of the tip. It is about travelling to Asia and
          all the places where you need to go to eat, sleep or what things you
          should do.{" "}
        </Text>
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
