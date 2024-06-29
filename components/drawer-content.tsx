import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, TouchableOpacity } from "react-native";

export default function DrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: "blue", paddingTop: 40 }}
    >
      <MenuItem label="deneme" />
      <MenuItem label="deneme2" />
      <MenuItem label="deneme3" />
      <MenuItem label="deneme4" />
      <MenuItem label="deneme5" />
    </DrawerContentScrollView>
  );
}

function MenuItem({ label, ...props }: any) {
  return (
    <TouchableOpacity style={[{ padding: 10 }, props.style]} {...props}>
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
}
