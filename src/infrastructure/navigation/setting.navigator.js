import React from "react";

import { SettingsScreen } from "../../features/settings/screen/settings.screen";
import { FavouritesScreen } from "../../features/settings/screen/favourites.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingNavigator = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
