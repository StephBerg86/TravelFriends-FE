import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import Screen from "./app/components/Screen";
import AppInput from "./app/components/AppInput";
import ChooseCategory from "./app/components/ChooseCategory";

export default function App() {
  const categories = [
    { label: "To do", value: 1 },
    { label: "To stay", value: 2 },
    { label: "To eat", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <ChooseCategory
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppInput icon="email" placeholder="email" />
    </Screen>
  );
}
