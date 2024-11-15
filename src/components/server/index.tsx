import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { images } from "@/assets";
import Network from "../network";
import { uri } from "@/api/api";

type ServerProps = {
  serverImage: string;
  name: string;
  strength: number[];
};

const network = [1, 2, 3, 4, 5];
const strengthArray = [1, 2, 3, 4];

const Server = ({ serverImage, name }: ServerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countryContainer}>
        <Image source={{ uri: `http://${uri}/${serverImage}` }} style={styles.imageStyle} />
        <Text style={styles.serverName}>{name}</Text>
      </View>
      <View style={styles.networkContainer}>
        {network.map((item, index) => {
          const networkStrength = index < strengthArray.length ? true : false;
          const weakNetwork = strengthArray.length < 3 ? true : false;
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
    </View>
  );
};

export default Server;
