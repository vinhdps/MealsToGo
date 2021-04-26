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
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://cdn.icon-icons.com/icons2/789/PNG/512/restaurant_icon-icons.com_65336.png",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg",
    ],
    address = "123 Random Street,  Big City,  Vietnam",
    isOpenNow = true,
    rating = 5,
    isCloseTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <CardPicture key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <LeftSection>
          <Text variant="label">{name}</Text>
          <Rating>
            {ratingArray.map(() => (
              <Star xml={star} />
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
