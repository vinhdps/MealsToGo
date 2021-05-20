import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "../navigation/restaurant.navigator";
import { SettingNavigator } from "../navigation/setting.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";

import { RestaurantContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouriteContextProvider } from "../../services/favourite/favourite.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "home",
  Map: "map",
  Settings: "settings",
};

const TAB_ICON_COLOR = {
  activeTintColor: "#ff3300",
  inactiveTintColor: "#4d4d4d",
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

export const AppNavigator = () => {
  return (
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => createScreenOptions({ route })}
            tabBarOptions={TAB_ICON_COLOR}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};
