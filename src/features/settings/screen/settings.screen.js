import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.compononent";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingContainer = styled(SafeArea)`
  background-color: #fff;
`;

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[4]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const TouchableAvatar = styled.TouchableOpacity`
  border-width: 3px;
  border-color: gray;
  border-radius: 80px;
`;

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);
  const getProfilePicture = async (user) => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SettingContainer>
      <AvatarContainer>
        <Spacer position="bottom" size="xl" />
        <TouchableAvatar onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon
              size={140}
              icon="account-box-multiple"
              backgroundColor="#2182BD"
            />
          ) : (
            <Avatar.Image
              size={140}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableAvatar>
        <Spacer position="top" size="xl">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingItem
          title="Favourite"
          description="View your favourite"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SettingContainer>
  );
};
