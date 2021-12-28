import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MyDeliveries from '../screens/MyDeliveries';
import Support from '../screens/Support';

import NewDeliveryStackNav from './NewDeliveryStackNav';

const NavTabs = createBottomTabNavigator();

export default function MainBottomTabNav() {
  return (
    <NavigationContainer>
      <NavTabs.Navigator>
        <NavTabs.Screen
          name="MyDeliveries"
          component={MyDeliveries}
          options={({ navigation }) => ({
            tabBarBadge: 3,
            title: 'My Deliveries',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
            headerRight: () => (
              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#000"
                onPress={() => navigation.navigate('NewDeliveryStackNav')}
                style={styles.headerIcons}
              />
            ),
          })}
        />
        <NavTabs.Screen
          name="NewDeliveryStackNav"
          component={NewDeliveryStackNav}
          options={{
            headerShown: false,
            title: 'New Delivery',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />

        <NavTabs.Screen
          name="Support"
          component={Support}
          options={{
            tabBarBadge: 2,
            title: 'Support Tickets',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </NavTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcons: {
    marginRight: 10,
  },
});
