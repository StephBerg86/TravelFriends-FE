import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import traveltipApi from "../api/traveltips";
import AppButton from "../components/AppButton";

function HomeScreen({ navigation }) {
  const [tips, setTips] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTips();
  }, []);

  const loadTips = async () => {
    setLoading(true);
    const response = await traveltipApi.getTips();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setTips(response.data.tips.rows);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't get the travel tips</Text>
          <AppButton title="Retry" onPress={loadTips} />
        </>
      )}
      <ActivityIndicator animating={loading} size="large" />
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
