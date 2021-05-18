import React from "react";
import {
  RestaurantCard,
  CardPicture,
  CardInfo,
  LeftSection,
  RightSection,
  Rating,
  Star,
  Opening,
  Icon,
} from "./restaurants-info-card.styles";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Favourite } from "../../../components/favourite/favourite.components";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Random Street Hanoi Vietnam",
    isOpenNow = true,
    rating = 5,
    //isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <CardPicture key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <LeftSection>
          <Text variant="label">{name}</Text>
          <Rating>
            {ratingArray.map((_, index) => (
              <Star key={`star-${placeId}-${index}`} xml={star} />
            ))}
          </Rating>
          <Text variant="description">{address}</Text>
        </LeftSection>
        <RightSection>
          <Spacer position="right" size="l">
            {isOpenNow && <Opening xml={open} />}
          </Spacer>
          <Icon source={{ uri: icon }} />
        </RightSection>
      </CardInfo>
    </RestaurantCard>
  );
};
