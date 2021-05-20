import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.compononent";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[4]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea backgroundColor="#fff">
      <AvatarContainer>
        <Avatar.Icon
          size={150}
          icon="account-box-multiple"
          backgroundColor="#2182BD"
        />
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
    </SafeArea>
  );
};
