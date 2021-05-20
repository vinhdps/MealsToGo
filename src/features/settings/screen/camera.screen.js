import React, { useRef, useEffect, useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../components/typography/text.components";
import LottieView from "lottie-react-native";

const AnimationWrapper = styled.View`
  align-self: center;
  width: 60%;
  height: 40%;
  position: absolute;
  bottom: 0px;
`;

const NoCamereView = styled.View`
  align-items: center;
  justify-content: center;
`;

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(false);
  const snap = async (user) => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return (
      <NoCamereView>
        <Text variant="error" size="label">
          No access to camera
        </Text>
      </NoCamereView>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => snap(user)}>
        <ProfileCamera
          ref={(camera) => (cameraRef.current = camera)}
          type={Camera.Constants.Type.front}
        >
          <AnimationWrapper>
            <LottieView
              key="animation"
              autoPlay
              loop
              resizeMode="cover"
              source={require("../../../../assets/touch.json")}
            />
          </AnimationWrapper>
        </ProfileCamera>
      </TouchableOpacity>
    );
  }
};
