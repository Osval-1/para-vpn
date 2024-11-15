import { Image, Text, View, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import Network from "../network";
import { uri } from "@/api/api";
import { ServerType } from "@/types/screens";

type ServerProps = {
  serverImage: string;
  name: string;
  strength: number[];
  onpress: ()=>void
};

const network = [1, 2, 3, 4, 5];
const strengthArray = [1, 2, 3, 4];

const Server = ({ serverImage, name, strength, onpress }: ServerProps) => {
  return (
    <Pressable
      android_ripple={{ color: "#21345a", borderless: false }}
      style={styles.container}
      onPress={onpress}>
      <View style={styles.countryContainer}>
        <Image
          source={{ uri: `http://${uri}/${serverImage}` }}
          style={styles.imageStyle}
        />
        <Text style={styles.serverName}>{name}</Text>
      </View>
      <View style={styles.networkContainer}>
        {strength &&
          network.map((item, index) => {
            const networkStrength = index < strength.length ? true : false;
            const weakNetwork = strength.length < 3 ? true : false;
            return (
              <Network
                size={item}
                strength={networkStrength}
                weak={weakNetwork}
                key={index}
              />
            );
          })}
      </View>
    </Pressable>
  );
};

export default Server;
