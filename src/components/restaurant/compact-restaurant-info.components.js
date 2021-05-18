import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../../components/typography/text.components";
import { Spacer } from "../../components/spacer/spacer.components";

const CompactImageIOS = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebviewAndroid = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactInfoView = styled.View`
  border-radius: 20px;
  max-width: 140px;
  align-items: center;
  justify-content: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebviewAndroid : CompactImageIOS;

  return (
    <CompactInfoView>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Spacer position="all" size="l">
        <Text center variant="caption" numberOfLines={3}>
          {restaurant.name}
        </Text>
      </Spacer>
    </CompactInfoView>
  );
};
