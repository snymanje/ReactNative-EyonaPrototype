import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

function BasicInfoScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.basicContent}>
        <Card containerStyle={styles.card}>
          <Card.Title>CREATE NEW DELIVERY</Card.Title>
          <Card.Divider />
          <Input
            label="Order Number"
            errorStyle={{ color: 'red' }}
            leftIcon={<Ionicons name="pencil-outline" size={18} color="gray" />}
          />
          <Input
            label="Site"
            leftIcon={<Ionicons name="pencil-outline" size={18} color="gray" />}
            errorStyle={{ color: 'red' }}
          />
        </Card>
        <Button
          containerStyle={styles.button}
          title="Next"
          onPress={() => navigation.navigate('TankInfoScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  basicContent: {},
  card: {
    borderRadius: 10,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default BasicInfoScreen;
