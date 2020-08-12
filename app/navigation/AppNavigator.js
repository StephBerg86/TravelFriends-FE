import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddTipScreen from "../screens/AddTipScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Travel tips" component={FeedNavigator} />
    <Tab.Screen name="Add travel tip" component={AddTipScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
