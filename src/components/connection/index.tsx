import { Text, View } from "react-native";
import React from "react";
import { Icon } from "../icon";
import { styles } from "./styles";

type ConnectionProps = {
  iconName: string;
  speed: number|undefined;
  color: string;
};

const Connection = ({ iconName, speed, color }: ConnectionProps) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={24} color={color} />
      <Text style={styles.speedLabel}>{`${speed}M/S`}</Text>
    </View>
  );
};

export default Connection;
