import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BasicInfoScreen from "../screens/NewDelivery/BasicInfoScreen";
import TankInfoScreen from "../screens/NewDelivery/TankInfoScreen";
import SummaryScreen from "../screens/NewDelivery/SummaryScreen";

const NavStack = createNativeStackNavigator();

export default function NewDeliveryStackNav() {
  return (
    <NavStack.Navigator>
      <NavStack.Screen
        name="BasicInformation"
        component={BasicInfoScreen}
        options={{ title: "Basic Information" }}
      />
      <NavStack.Screen
        name="TankInfoScreen"
        component={TankInfoScreen}
        options={{ title: "Tank Information" }}
      />
      <NavStack.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{ title: "Summary Information" }}
      />
    </NavStack.Navigator>
  );
}
