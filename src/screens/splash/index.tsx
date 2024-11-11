import { Text, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Button from "../../components/button";
import { images } from "../../assets";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/screens";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Splash">;

const Splash = ({ navigation }: SplashScreenProps) => {
  const handleButtonPress = () => {
    navigation.navigate("BottomTabs");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.splash}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Welcome to PARA VPN</Text>
          <Text style={styles.bodyText}>
            PARA VPN is the fastest VPN in the world that provides you with more
            than 50 servers in countries all over the world
          </Text>
        </View>
        <Button label={"Get Started"} onpress={handleButtonPress} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;
