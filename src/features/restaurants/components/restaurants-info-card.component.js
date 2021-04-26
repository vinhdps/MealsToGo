import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.components";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: ${(props) => props.theme.space[3]};
`;

const CardPicture = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardInfo = styled(View)`
  flex-direction: row;
`;

const LeftSection = styled(View)`
  flex: 1;
  align-items: flex-start;
  padding-left: ${(props) => props.theme.space[3]};
`;

const RightSection = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[3]};
`;

const Star = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

const Opening = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

const Icon = styled(Image)`
  width: ${(props) => props.theme.sizes[3]};
  height: ${(props) => props.theme.sizes[3]};
`;

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
          <Text variant="label">{address}</Text>
        </LeftSection>
        <RightSection>
          <Spacer position="right" size="xxxl">
            {isOpenNow && <Opening xml={open} />}
          </Spacer>
          <Spacer position="right" size="l">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </RightSection>
      </CardInfo>
    </RestaurantCard>
  );
};
