import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import TipDetailScreen from "../screens/TipDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Homepage" component={HomeScreen} />
    <Stack.Screen name="Tip Detail Screen" component={TipDetailScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
