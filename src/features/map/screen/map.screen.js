import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import MapView from "react-native-maps";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.components";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, northeastLat, southwestLat } = location;

  useEffect(() => {
    setLatDelta(northeastLat - southwestLat);
  }, [location]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.05,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              titile={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout isMap restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
