import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { globalStyles } from "@/styles/globalStyles";
import Server from "@/components/server";
import { Icon } from "@/components/icon";
import { images } from "@/assets";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ServerType } from "@/types/screens";
import { useQuery } from "@tanstack/react-query";
import { getServer } from "@/api/api";

type ServersScreenProps = NativeStackScreenProps<RootStackParamList, "Servers">;

const Servers = ({ navigation }: ServersScreenProps) => {
  const handleNavigation = () => {
    navigation.goBack();
  };
  const { isLoading, data } = useQuery({
    queryFn: getServer,
    queryKey: ["get_servers"],
    // refetchInterval:3000
  });

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
          {data &&
            data.servers.map((server: ServerType, index:number) => {
              if (index < 2) return;
              return (
                <Server
                  key={server._id}
                  name={server.country}
                  serverImage={server.countryImage}
                  strength={server.strength}
                  onpress={() => console.log("server")}
                />
              );
            })}
        </View>
        <View>
          <Image source={images.banner} style={styles.imageStyle} />
        </View>
        <View style={styles.serverContainer}>
          <Text style={styles.header2}>All Servers</Text>
          {isLoading && <ActivityIndicator size="large" color="#fff" />}
          {data &&
            data.servers.map((server: ServerType) => (
              <Server
                key={server._id}
                name={server.country}
                serverImage={server.countryImage}
                strength={server.strength}
                onpress={() => console.log("server")}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Servers;
