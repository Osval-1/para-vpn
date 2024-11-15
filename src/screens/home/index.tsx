import { Text, View, Pressable, Image, ScrollView,ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { globalStyles } from "@/styles/globalStyles";
import { Icon } from "@/components/icon";
import { images } from "@/assets";
import Connection from "@/components/connection";
import Server from "@/components/server";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ServerType } from "@/types/screens";
import { useQuery } from "@tanstack/react-query";
import { getServer } from "@/api/api";
import ConnectIllustration from "./ConnectionIllustration";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeScreenProps) => {
  const [ConnectedServer, setConnectedServer] = useState<ServerType>();
  const [SelectedId, setSelectedId] = useState("");
  const {isLoading, data } = useQuery({
    queryFn: getServer,
    queryKey: ["get_servers"],
    refetchInterval: 3000,
  });

  useEffect(() => {
    if (SelectedId && data) {
      setConnectedServer(
        data.servers.find((server: ServerType) => server._id === SelectedId),
      );
    }
  }, [data]);

  const handleNavigation = () => {
    navigation.navigate("Servers");
  };
  const handleSelectServer = (server: ServerType) => {
    setSelectedId(server._id);
    setConnectedServer(server);
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:10}}
        stickyHeaderIndices={[0]}
        overScrollMode="never">
        <>
          <View style={styles.header}>
            <Pressable
              style={globalStyles.iconContainer}
              onPress={handleNavigation}>
              <Icon name={"menu"} size={24} color="#fff" />
            </Pressable>
            <Text style={styles.headerText}>PARA VPN</Text>
            <Pressable style={globalStyles.iconContainer}>
              <Icon name={"location"} size={24} color="#fff" />
            </Pressable>
          </View>
        </>
        <View style={styles.illustrationContainer}>
          {SelectedId ? (
            <Image source={images.connect} style={styles.imageStyle} />
          ) : (
            <ConnectIllustration color={SelectedId ? "#6398FF" : "grey"} />
          )}
          <Text style={styles.header2}>
            {SelectedId ? "Connected" : "Not Connected"}
          </Text>
          <Text style={styles.connectLeftText}>
            Your Current Location:{" "}
            <Text style={styles.connectRightText}>
              {SelectedId ? ConnectedServer?.country : "Not Connected"}
            </Text>
          </Text>
        </View>
        <View style={styles.connectionContainer}>
          <Connection
            iconName="arrow-up"
            speed={SelectedId ? ConnectedServer?.dataRate[0] : 0}
            color="#25FFB1"
          />
          <Connection
            iconName="arrow-up1"
            speed={SelectedId ? ConnectedServer?.dataRate[1] : 0}
            color="#FF2525"
          />
        </View>
        <View style={styles.serverContainer}>
          <Text style={styles.header2}>Your recent locations</Text>
          {isLoading && <ActivityIndicator size="large" color="#fff"/>}
          {data &&
            data.servers.map((server: ServerType) => (
              <Server
                key={server._id}
                name={server.country}
                serverImage={server.countryImage}
                strength={server.strength}
                onpress={() => handleSelectServer(server)}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
