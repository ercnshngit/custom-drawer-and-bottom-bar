import { View, Text, useWindowDimensions, Platform } from "react-native";
import React, { useEffect } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function DrawerScreenWrapper({ children }: any) {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          Easing.in(Easing.exp)(progress.value),
          [0, 1],
          [1, 0.8],
          "clamp"
        ),
      },
    ],
  }));

  const animatedInnerStyle = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [0, 40], "clamp"),
  }));

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <Animated.View
        style={[
          { flex: 1, flexDirection: "row", alignItems: "center" },
          animatedStyle,
        ]}
      >
        <FakeScreen screenHeight="75%" />
        <FakeScreen screenHeight="80%" />
        <FakeScreen screenHeight="85%" />
        <Animated.View
          style={[
            {
              flex: 1,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
            },
            animatedInnerStyle,
          ]}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

function FakeScreen({ screenHeight }: { screenHeight: string }) {
  const progress = useDrawerProgress();
  const animatedPlaceholdersStyle = useAnimatedStyle(() => ({
    borderTopLeftRadius: interpolate(progress.value, [0, 1], [0, 40], "clamp"),
    borderBottomLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 40],
      "clamp"
    ),
    width: interpolate(progress.value, [0, 1], [0, 20], "clamp"),
  }));

  return (
    <Animated.View
      style={[
        {
          height: screenHeight as any,
          backgroundColor: "#eee",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          width: 20,
        },
        animatedPlaceholdersStyle,
      ]}
    ></Animated.View>
  );
}
