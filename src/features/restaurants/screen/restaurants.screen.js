import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar, ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.compononent";
import { RestaurantContext } from "../../../../src/services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;
const RestaurantListContainer = styled.FlatList`
  padding: ${(props) => props.theme.space[4]};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
