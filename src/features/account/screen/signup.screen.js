import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  BackButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { isLoading, onSignUp, error, deleteError } = useContext(
    AuthenticationContext
  );
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />

        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure={true}
          onChangeText={(password) => setPassword(password)}
        />

        <AuthInput
          label="Repeated Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure={true}
          onChangeText={(password) => setRepeatedPassword(password)}
        />
        <ErrorContainer>
          {error && (
            <Spacer position="left" size="l">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
        </ErrorContainer>
        {isLoading ? (
          <ActivityIndicator
            size={30}
            animating={true}
            color={Colors.blue300}
          />
        ) : (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            style={{ borderRadius: 5 }}
            onPress={() => onSignUp(email, password, repeatedPassword)}
          >
            SignUp
          </AuthButton>
        )}
      </AccountContainer>
      <Spacer position="bottom" size="xl" />
      <BackButton
        mode="contained"
        style={{ borderRadius: 5 }}
        onPress={() => {
          navigation.goBack();
          deleteError();
        }}
      >
        <Text variant="label">Back</Text>
      </BackButton>
    </AccountBackground>
  );
};
