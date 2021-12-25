import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Support = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Support</Text>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
