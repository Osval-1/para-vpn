import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { images } from "@/assets";

type NetworkProps = {
  size: number;
  strength: boolean;
  weak: boolean;
};
const Network = ({ size, strength, weak }: NetworkProps) => {
  return (
    <View style={styles.container }>
      <View
        style={{
          backgroundColor: strength ? (weak ? "#FF2B51" : "#33C600") : "#fff",
          height: size * 4,
        }}></View>
    </View>
  );
};

export default Network;
