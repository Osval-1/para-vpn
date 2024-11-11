import { Text, View, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { globalStyles } from "@/styles/globalStyles";
import { Icon } from "@/components/icon";
import { images } from "@/assets";
import { typography } from "@/styles/typography";
import Connection from "@/components/connection";
import Server from "@/components/server";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/screens";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;


const Home = ({navigation}:SplashScreenProps) => {
  const handleNavigation = ()=>{
    navigation.navigate("Servers")
  }
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        // contentContainerStyle={{ paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        overScrollMode="never"
        ><>
        <View style={styles.header}>
          <Pressable style={globalStyles.iconContainer} onPress={handleNavigation}>
            <Icon name={"menu"} size={24} color="#fff" />
          </Pressable>
          <Text style={styles.headerText}>PARA VPN</Text>
          <Pressable style={globalStyles.iconContainer}>
            <Icon name={"location"} size={24} color="#fff" />
          </Pressable>
        </View>
        </>
        <View style={styles.illustrationContainer}>
          <Image source={images.connect} style={styles.imageStyle} />
          <Text style={styles.header2}>Connected</Text>
          <Text style={styles.connectLeftText}>
            Your Current Location:{" "}
            <Text style={styles.connectRightText}> Netherlands</Text>
          </Text>
        </View>
        <View style={styles.connectionContainer}>
          <Connection iconName="arrow-up" speed="25M/S" color="#25FFB1" />
          <Connection iconName="arrow-up1" speed="25M/S" color="#FF2525" />
        </View>
        <View style={styles.serverContainer}>
          <Text style={styles.header2}>Your recent locations</Text>
          <Server />
          <Server />
          <Server />
          <Server />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
