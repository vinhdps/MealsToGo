import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FavouriteContext } from "../../../services/favourite/favourite.context";
import { SafeArea } from "../../../components/utility/safe-area.compononent";
import { Text } from "../../../components/typography/text.components";

import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavouriteListContainer = styled.FlatList`
  padding: ${(props) => props.theme.space[4]};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouriteContext);
  return favourites.length ? (
    <SafeArea>
      <FavouriteListContainer
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text vairant="error">No favourites yet</Text>
    </NoFavouritesArea>
  );
};
