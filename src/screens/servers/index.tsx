import { Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { globalStyles } from "@/styles/globalStyles";
import Server from "@/components/server";
import { Icon } from "@/components/icon";

const Servers = () => {
  const handleNavigation = () => {};
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        overScrollMode="never">
        <>
          <View style={styles.headerContainer}>
            <Pressable
              style={globalStyles.iconContainer}
              onPress={handleNavigation}>
              <Icon name={"menu"} size={24} color="#fff" />
            </Pressable>
            <Text style={styles.header}>Select Server</Text>
          </View>
        </>
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

export default Servers;
