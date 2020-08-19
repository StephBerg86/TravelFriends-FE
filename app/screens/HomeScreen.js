import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Icon,
  Text,
  List,
} from "native-base";

import Card from "../components/Card";
import traveltipApi from "../api/traveltips";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function HomeScreen({ navigation }) {
  const [tips, setTips] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  useEffect(() => {
    const results = tips.filter((tip) => tip.country.name.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    console.log("event", event);
    setSearchTerm(event);
  };

  return (
    <Container>
      {error && (
        <>
          <Screen>
            <Text>Couldn't get the travel tips</Text>
          </Screen>
          <AppButton title="Retry" onPress={loadTips} />
        </>
      )}
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChangeText={handleChange}
          />
        </Item>
      </Header>
      <ActivityIndicator animating={loading} size="large" />
      <Content>
        <List>
          <FlatList
            data={searchResults}
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
        </List>
      </Content>
    </Container>
  );
}

export default HomeScreen;
