import { View, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
  background-color: white;
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[4]};
`;

export const CardPicture = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardInfo = styled(View)`
  flex-direction: row;
`;

export const LeftSection = styled(View)`
  flex: 0.7;
  align-items: flex-start;
  padding-left: ${(props) => props.theme.space[3]};
`;

export const RightSection = styled(View)`
  flex: 0.3;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[3]};
`;

export const Star = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const Opening = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
  margin-right: ${(props) => props.theme.space[4]};
`;

export const Icon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;
