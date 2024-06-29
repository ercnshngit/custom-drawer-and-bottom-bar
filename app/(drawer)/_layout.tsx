import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import DrawerContent from "@/components/drawer-content";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
          overlayColor: "transparent",
          drawerStyle: {
            width: "40%",
          },
        }}
        drawerContent={DrawerContent}
      ></Drawer>
    </GestureHandlerRootView>
  );
}
