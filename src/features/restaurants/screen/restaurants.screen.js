import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.compononent";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;
const RestaurantListContainer = styled.FlatList`
  padding: ${(props) => props.theme.space[4]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
        { name: 15 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    ></RestaurantListContainer>
  </SafeArea>
);
