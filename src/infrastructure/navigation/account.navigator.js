import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screen/account.screen";
import { LoginScreen } from "../../features/account/screen/login.screen";
import { SignupScreen } from "../../features/account/screen/signup.screen";
const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator headerMode="none">
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Signup" component={SignupScreen} />
    </AccountStack.Navigator>
  );
};
