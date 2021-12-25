import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Input, Icon, Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const BasicInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Card>
        <Card.Title>CREATE NEW DELIVERY</Card.Title>
        <Card.Divider />
        <Input
          label="Order Number"
          errorStyle={{ color: "red" }}
          leftIcon={<Ionicons name="pencil-outline" size={18} color="gray" />}
          /* errorMessage="ENTER A VALID ERROR HERE" */
        />
        <Input
          label="Site"
          leftIcon={<Ionicons name="pencil-outline" size={18} color="gray" />}
          errorStyle={{ color: "red" }}
          /* errorMessage="ENTER A VALID ERROR HERE" */
        />
      </Card>
      <Button
        title="Next"
        onPress={() => navigation.navigate("TankInfoScreen")}
      ></Button>
    </View>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
