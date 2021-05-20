import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.compononent";
import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { FavouriteContext } from "../../../services/favourite/favourite.context";
import { FavouriteBar } from "../../../components/favourite/favourite-bar.components";

const RestaurantListContainer = styled.FlatList`
  padding: ${(props) => props.theme.space[4]};
`;

const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: 25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouriteContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouriteToggle={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <FadeInView>
        <RestaurantListContainer
          data={restaurants}
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
      </FadeInView>
    </SafeArea>
  );
};
