import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Support() {
  return (
    <View style={styles.screen}>
      <Text>Support</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Support;
