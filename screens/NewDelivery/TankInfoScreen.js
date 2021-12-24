import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TankInfoScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tank Screen</Text>
      <Button
        title="Go to Summary Info"
        onPress={() =>
          navigation.navigate("SummaryScreen", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
};

export default TankInfoScreen;

const styles = StyleSheet.create({});
