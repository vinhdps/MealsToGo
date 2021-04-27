import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsScreen } from "./src/features/restaurants/screen/restaurants.screen";
import { SettingsScreen } from "./src/features/settings/screen/settings.screen";
import { MapScreen } from "./src/features/map/screen/map.screen";
import { restaurantRequest } from "./src/services/restaurants/restaurants.service";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "home",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const tabBarIcon = ({ focused, size, color }) => (
    <Ionicons
      name={focused ? TAB_ICON[route.name] : `${TAB_ICON[route.name]}-outline`}
      size={size}
      color={color}
    />
  );
  return { tabBarIcon };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => createScreenOptions({ route })}
            tabBarOptions={{
              activeTintColor: theme.colors.ui.selected,
              inactiveTintColor: theme.colors.ui.notselected,
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
