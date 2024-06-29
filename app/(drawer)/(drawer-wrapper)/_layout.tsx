import { View, Text } from "react-native";
import React from "react";
import DrawerScreenWrapper from "@/components/drawer-screen-wrapper";
import { Slot } from "expo-router";

export default function DrawerWrapper() {
  return (
    <DrawerScreenWrapper>
      <Slot />
    </DrawerScreenWrapper>
  );
}
