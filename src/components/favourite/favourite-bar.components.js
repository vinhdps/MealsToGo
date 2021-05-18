import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.components";
import { Text } from "../typography/text.components";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
const FavouritesTouch = styled(TouchableOpacity)`
  margin-horizontal: 5px;
`;
export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <FavouritesTouch
              key={key}
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </FavouritesTouch>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
