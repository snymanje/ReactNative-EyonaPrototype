import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MyDeliveries = ({ route, navigation }) => {
  //const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      {/*   <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
    </View>
  );
};

export default MyDeliveries;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
