import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const CardPicture = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardInfo = styled(View)`
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  flex-direction: row;
`;

const LeftSection = styled(View)`
  flex-direction: column;
`;

const RightSection = styled(View)`
  flex-direction: column;
`;

const Name = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.monospace};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[1]};
`;

const Opening = styled(View)``;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg",
    ],
    address = "123  Random Street, Big City, Vietnam",
    isOpenNow = true,
    rating = 3,
    isCloseTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  console.log(ratingArray);
  return (
    <RestaurantCard elevation={5}>
      <CardPicture key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <LeftSection>
          <Name>{name}</Name>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </LeftSection>
        <RightSection>
          <Opening>
            <SvgXml xml={open} width={35} height={35} />
          </Opening>
        </RightSection>
      </CardInfo>
    </RestaurantCard>
  );
};
