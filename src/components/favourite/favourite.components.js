import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavouriteContext } from "../../services/favourite/favourite.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 999;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouriteContext
  );
  const isFavourite = favourites.find((r) => r.name === restaurant.name);
  return (
    <FavouriteButton
      onPress={() => {
        if (isFavourite) {
          removeFromFavourites(restaurant);
        } else {
          addToFavourites(restaurant);
        }
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
