import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import Picker from "./Picker";

function ChooseCategory({
  onSelectItem,
  selectedItem,
  items,
  icon,
  placeholder,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
          )}
          <Text style={styles.textInput}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color="#f2f2f2"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <Picker
                label={item.label}
                onPress={() => {
                  setModalVisible(false), onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009977",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    color: "#f2f2f2",
    marginRight: 10,
  },
  textInput: {
    color: "#f2f2f2",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex: 1,
  },
});

export default ChooseCategory;
