import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import traveltipApi from "../api/traveltips";
import AppButton from "../components/AppButton";

// const traveltips = [
//   {
//     id: 1,
//     title: "My trip to Iceland",
//     description: "It was so nice but so cold. You should go",
//     image: require("../assets/testImage.jpg"),
//   },
//   {
//     id: 2,
//     title: "Japan is amazing",
//     description: "Japan is more than just sishi. But the sushi is amazing",
//     image: require("../assets/testImage.jpg"),
//   },
// ];

function HomeScreen({ navigation }) {
  const [tips, setTips] = useState();

  useEffect(() => {
    loadTips();
  }, []);

  const loadTips = async () => {
    const response = await traveltipApi.getTips();
    if (!response.ok) return setError(true);

    setError(false);
    setTips(response.data.tips.rows);
  };
  console.log(tips);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            imageUrl={item.image}
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
