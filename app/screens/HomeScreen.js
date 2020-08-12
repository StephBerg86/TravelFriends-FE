import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

const traveltips = [
  {
    id: 1,
    title: "My trip to Iceland",
    description: "It was so nice but so cold. You should go",
    image: require("../assets/testImage.jpg"),
  },
  {
    id: 2,
    title: "Japan is amazing",
    description: "Japan is more than just sishi. But the sushi is amazing",
    image: require("../assets/testImage.jpg"),
  },
];

function HomeScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={traveltips}
        keyExtractor={(tip) => tip.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => navigation.navigate("Tip Detail Screen", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default HomeScreen;
