import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const BasicInfoScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>BasicInfoScreen</Text>
      <Button
        title="Go to Tank Info"
        onPress={() => navigation.navigate("TankInfoScreen")}
      />
    </View>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
