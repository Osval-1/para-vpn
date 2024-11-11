import { Text, View, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { globalStyles } from "@/styles/globalStyles";
import Server from "@/components/server";
import { Icon } from "@/components/icon";
import { images } from "@/assets";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/screens";

type ServersScreenProps = NativeStackScreenProps<RootStackParamList, "Servers">;

const Servers = ({ navigation }: ServersScreenProps) => {
  const handleNavigation = () => {
    navigation.goBack()
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={{ gap: 24 }}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        overScrollMode="never">
        <>
          <View style={styles.headerContainer}>
            <Pressable
              style={globalStyles.iconContainer}
              onPress={handleNavigation}>
              <Icon name={"arrow-left"} size={24} color="#fff" />
            </Pressable>
            <Text style={styles.header}>Select Server</Text>
          </View>
        </>
        <View style={styles.serverContainer}>
          <Text style={styles.header2}>Fastest Servers</Text>
          <Server />
          <Server />
        </View>
        <View>
          <Image source={images.banner} style={styles.imageStyle} />
        </View>
        <View style={styles.serverContainer}>
          <Text style={styles.header2}>All Servers</Text>
          <Server />
          <Server />
          <Server />
          <Server />
          <Server />
          <Server />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Servers;
